import { LoaderGenericTypes } from "../../components/ui/Types.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Product {
  title: string;
  description?: string;
  price: string;
  someImage?: ImageWidget;
  imageSrc: string;
}
export interface ListItem {
  text: string;
  bold?: boolean;
  color?: "text-red-800" | "text-green-800";
}

export interface Props {
  product?: Product;
  adDescription?: string;
  loader?: LoaderGenericTypes;
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
      <div class=" min-w-450 bg-gray-200 flex-shrink flex-grow-0 basis-0 flex-wrap justify-center py-3 flex m-auto rounded border-orange-500 ">
        <div>
          {props.product &&
            (
              <div class="justify-center flex-wrap flex *:flex-shrink-0 *:flex-grow *:basis-full px-3 text-center">
                <div>
                  <img src={props.product.imageSrc} alt={props.product.title} />
                </div>
                <h2 class="text-base py-2 text-blue-500">
                  {props.product.title}
                </h2>
                <p class="description text-blue-500">
                  {props.adDescription ?? (props.product.description)}
                </p>
                <p class="text-green-400 font-bold text-lg">
                  {props.product.price}
                </p>
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
