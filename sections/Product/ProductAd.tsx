import type {
  LoaderGenericTypes,
  ProductAd,
} from "../../components/ui/Types.ts";
import Image from "apps/website/components/Image.tsx";
import SaveProductAd from "../../islands/SaveProductAd/SaveProductAd.tsx";
import { AppContext } from "../../apps/site.ts";
import { SectionProps } from "deco/mod.ts";
import { ProductDetailsPage } from "apps/commerce/types.ts";


export interface ListItem {
  text: string;
  bold?: boolean;
  color?: "text-red-800" | "text-green-800";
}

export interface Props {
  getProdEvR: any;
  product?: ProductAd;
  // product?: ProductDetailsPage | null;
  adDescription?: string;
  loader?: LoaderGenericTypes;
  vertical?: boolean;
  animateImage?: boolean;
  productId?: number;
  highlight?: boolean;
}

export function ErrorFallback({ error }: { error: Error }) {
  return (
    <div class="justify-center flex flex-wrap flex-col items-center">
      <Image
        width={280}
        class="w-full lg:100 object-fit"
        sizes="(max-width: 280px) 100vw, 30vw"
        src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10316/674d0c24-6481-4c3a-8209-26dee73403da"
        alt="Erro no loader"
        decoding="async"
        loading="lazy"
      />
      <h1 class="text-lg my-4 decoration-red-600">Aconteceu um erro =(</h1>
      <h2 class="bg-slate-300 px-4 mb-4">
        Aconteceu um erro no carregamento do loader. Tente carregar algum outro
      </h2>
      <p class="border-orange-500 font-bold">O erro: {error?.message}</p>
      <button class="bg-orange-500 text-lg px-6 py-2 mt-4 rounded decoration-white">
        <a href="//Cultura">Para saber mais</a>
      </button>
    </div>
  );
}

//Loading Fallback
export function LoadingFallback() {
  // Renderize spinners, esqueletos e outros espaços reservados
  return (
    <div style={{ height: "710px" }} class="w-full flex justify-center items-center">
      <span class="loading loading-spinner" />
    </div>
  );
}

export const loader = async (props: Props, req: Request, ctx: AppContext) => {

  const randomQuote = await fetch("https://api.api-ninjas.com/v1/quotes?category=happiness",{
    headers: { 'X-Api-Key': '/X/n2TOHa4jeL5imEJHkrg==0cTnuureVQYOqoP7'}
  });
  const randomQuoteR = await randomQuote.json()

  const myHeaders = new Headers();
  myHeaders.append("x-api-key", "storefront-vtex-serie");
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    "productId": props.productId?.toString(),
    "comment": randomQuoteR[0].quote.toString()
  });

  const requestOptions : object = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  const registerEventProduct = await fetch("https://camp-api.deco.cx/event", requestOptions  );

  const registerEventProductR = await registerEventProduct.json();

  const getProdEv = await fetch(`https://camp-api.deco.cx/event/${props.productId}`, {
    method: "GET",
    headers: {
      'x-api-key': "storefront-vtex-serie"
    }
  });
  const getProdEvR = await getProdEv.json();


  return {
    ...props,
    registerEventProductR,
    getProdEvR
  };
}

export default function ProductAd(props: SectionProps<typeof loader>) {
  // Função para desaninhamento seguro das props
  const getSectionProps = (props: any): Props => {
    if (props.product && props.product.product) {
      const nestedProps = props.product;
      return {
        ...nestedProps
      };
    }
    return props;
  };

  const sectionProps = getSectionProps(props);

  const prodProps = sectionProps.product?.product;

  return (
    <div>
      <div className="flex">
        
        <div className="w-[100%] max-w-650 bg-secondary flex-shrink flex-grow basis-0 flex-wrap justify-center py-3 flex m-auto rounded border-orange-500">
          <div className="bg-secondary">
            {sectionProps.product && (
              <div className="justify-center flex-wrap flex px-3 text-center relative">
                {/* <SaveProductAd product={sectionProps.product} productId={sectionProps.productId ?? 0 }  /> */}
                <div className={(sectionProps.vertical ? "w-[40%] flex" : " lg:w-[40%] md:w-full " + "flex") + " overflow-hidden"}>

                  {( sectionProps.highlight  && sectionProps.getProdEvR && sectionProps.getProdEvR.comments.length > 3 ) && 
                    <span className={"absolute px-2 left-3 top-1 bg-green-300 text-black font-bold text-[14px] z-[999]"}>
                      Destaque
                    </span>
                  }

                  sectionProps: {JSON.stringify(sectionProps, null, 2)} <br />

                  <img className={(sectionProps.vertical && "ease-in hover:animate-zoomIn") + " w-[100%] max-w-[450px] m-auto"} src={sectionProps.adDescription} alt={sectionProps.adDescription} />
                </div>
                <div className={(sectionProps.vertical ? "w-[60%] pl-3" : " lg:w-[60%] md:w-full md:pl-3 w-[100%] ") + " flex justify-between flex-col p-0"}>
                  <div className={"left-top relative"}>
                    <h2 className={(sectionProps.vertical ? "text-left pr-[50px]" : " md:text-left text-center ") + " py-2 text-white text-[22px]"}>
                      {prodProps?.product?.name}
                    </h2>
                    <p className={(sectionProps.vertical ? "text-left " : "md:text-left text-center ") + " description text-orange-500"}>
                      {sectionProps.adDescription ?? prodProps?.product?.description}
                    </p>
                  </div>
                  <div className="right-down">
                    <p className={(sectionProps.vertical ? "text-right " : "text-center md:text-right ") + "text-green-400 font-bold text-2xl pb-3"}>
                      R${prodProps?.product?.offers?.lowPrice ?? prodProps?.product?.offers?.highPrice}
                    </p>
                    <div className={(sectionProps.vertical ? "text-right space-x-2 " : "text-center md:text-right md:space-x-2 space-y-2 ")}>
                      <button className={(sectionProps.vertical ? " m-[unset] inline " : " md:m-[unset] md:inline") + " block m-auto text-white border rounded border-white px-2 py-1"}>Mais detalhes</button>
                      <button className={(sectionProps.vertical ? " m-[unset] inline " : " md:m-[unset] md:inline") + " block m-auto text-white border rounded border-white px-2 py-1"}>Comprar</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      
      </div>
    </div>
  );
}
