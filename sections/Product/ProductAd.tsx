import type {
  LoaderGenericTypes,
  ProductAd,
} from "../../components/ui/Types.ts";
import Image from "apps/website/components/Image.tsx";

import SaveProductAd from "../../islands/SaveProductAd/SaveProductAd.tsx";
import { AppContext } from "../../apps/site.ts";
import { SectionProps } from "deco/mod.ts";



export interface ListItem {
  text: string;
  bold?: boolean;
  color?: "text-red-800" | "text-green-800";
}

export interface Props {
  product?: ProductAd;
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
    <div
      style={{ height: "710px" }}
      class="w-full flex justify-center items-center"
    >
      <span class="loading loading-spinner" />
    </div>
  );
}

export const loader = async ( props: Props, req: Request, ctx: AppContext ) => {
  
  
  const registerEventProduct = await fetch("https://camp-api.deco.cx/event", {
    method: "POST",
    headers: {
      'x-api-key': "storefront-vtex-serie",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "productId": "productId",
      "Content": "Content"
    })
  });

  
  const registerEventProductR  = ( await registerEventProduct.json());
  console.log(' registerEventProduct ', registerEventProduct )

  
  const getProdEv = await fetch(`https://camp-api.deco.cx/event/${props.productId}`, {
    method: "GET",
    headers: {
      'x-api-key': "storefront-vtex-serie"
    }
  });

  
  const getProdEvR  = ( await getProdEv.json());
  console.log(' getProdEv ', getProdEv )

  

  return {
    ...props,
    registerEventProductR,
    getProdEvR
  }

}


export default function ProductAd(props: SectionProps<typeof loader>) {
  return (
    <div className="flex">
      <pre> Product ID: { props.productId } </pre>
      {
        props.registerEventProductR &&
        <p> registerEventProductR: <pre>{JSON.stringify(props.registerEventProductR, null, 2)}</pre> <br /> </p>
      }
      {
        props.getProdEvR &&
        <p> getProdEvR: <pre>{JSON.stringify(props.getProdEvR, null, 2)}</pre> <br /> </p>
      }
      <div className=" w-[100%] max-w-650 bg-secondary flex-shrink flex-grow basis-0 flex-wrap justify-center py-3 flex m-auto rounded border-orange-500 ">
        <div className="bg-secondary">
          {props.product &&
            (
              <div className="justify-center flex-wrap flex px-3 text-center relative">
                
                < SaveProductAd product={props.product} />

                <div className={ (props.vertical ? "w-[40%] flex" : " lg:w-[40%] md:w-full " + "flex" ) + " overflow-hidden"}>
                  <img className={ (props.vertical && "ease-in  hover:animate-zoomIn" ) + " w-[100%] max-w-[450px] m-auto"} src={props.product.imageSrc} alt={props.product.title} />
                </div>
                <div className= { (props.vertical ? "w-[60%] pl-3" : " lg:w-[60%] md:w-full md:pl-3 w-[100%] " ) + " flex justify-between flex-col p-0" }>


                  <div className={"left-top relative"}>
                    <h2 className={ (props.vertical ? "text-left pr-[50px]" : " md:text-left text-center ") + " py-2 text-white text-[22px]"}>
                      {props.product.title}
                    </h2>
                    <p className={ (props.vertical ? "text-left " :"md:text-left text-center ") + " description text-orange-500"}>
                      {props.adDescription ?? (props.product.description)}
                    </p>
                  </div>

                  <div className="right-down">
                    <p className={ (props.vertical ? "text-right " : "text-center md:text-right " ) + "text-green-400 font-bold text-2xl pb-3"}>
                      R${props.product.price}
                    </p>

                    <div className={ (props.vertical ? "text-right space-x-2 " : "text-center md:text-right md:space-x-2 space-y-2 " )}>
                      <button className={ (props.vertical ? " m-[unset] inline " : " md:m-[unset] md:inline") +" block m-auto  text-white border rounded border-white px-2 py-1"} >Mais detalhes</button>

                      <button className={ (props.vertical ? " m-[unset] inline " : " md:m-[unset] md:inline") +" block m-auto  text-white border rounded border-white px-2 py-1"} >Comprar</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}