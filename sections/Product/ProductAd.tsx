import type {
  LoaderGenericTypes,
  ProductAd,
} from "../../components/ui/Types.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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

export default function ProductAd(props: Props) {
  return (
    <div class="flex">
      <div class=" w-[100%] max-w-650 bg-gray-200 flex-shrink flex-grow basis-0 flex-wrap justify-center py-3 flex m-auto rounded border-orange-500 ">
        <div className="bg-secondary">
          {props.product &&
            (
              <div class="justify-center flex-wrap flex px-3 text-center relative">
                <span className="absolute right-3 top-0 border rounded-xl py-1 px-2 text-cyan-300 border-stone-400">
                  Save
                </span>
                <div className="lg:w-[40%] md:w-full">
                  <img className="w-[100%] max-w-[450px] m-auto" src={props.product.imageSrc} alt={props.product.title} />
                </div>
                <div className="lg:w-[60%] md:w-full flex justify-between flex-col md:pl-3 p-0 w-[100%]">

                  <div className="left-top relative">
                    <h2 class=" py-2 text-black text-[22px] text-center md:text-left">
                      {props.product.title}
                    </h2>
                    <p class=" text-center md:text-left description text-orange-500">
                      {props.adDescription ?? (props.product.description)}
                    </p>
                  </div>

                  <div className="right-down">
                    <p class="text-green-400 font-bold text-2xl  text-center md:text-right pb-3">
                      R${props.product.price}
                    </p>

                    <div className=" text-center md:text-right space space-x-2">
                      <button className=" block m-auto md:inline md:m-[unset] text-black border rounded border-orange-400 px-2 py-1" >Mais detalhes</button>
                      <button className=" block m-auto md:inline md:m-[unset] text-black border rounded border-orange-400 px-2 py-1" >Comprar</button>
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
