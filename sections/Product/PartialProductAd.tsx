import { Section } from "deco/mod.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import { useSignal } from "@preact/signals";

export interface Props {
  productAds: Section[];
  currentProduct?: number;
  buttonTitle: string;
}

export default function PartialProductAd({
  buttonTitle = "Another Product",
  productAds,
  currentProduct = 0
}: Props) {

  const section = productAds[currentProduct];

  return (
    <div>
      
      <div className={" hover:animate-animate__headShake relative z-[999999] translate-x-0 "}>
      Quant section.props { Object.keys(section.props).toString() } <br />
      section.props::: <pre>{ JSON.stringify(section.props, null, 2) } </pre> <br />
        <section.Component
          key={currentProduct}
          product={{
            ...section.props
          }}
  
        />

      {
        <button
          class="bg-orange-400 p-[20px] border-dashed border-2 border-sky-500 block mx-auto my-2"
          // usePartialSection chama o mesmo componente PartialProductAd com novas props
          {...usePartialSection(
            {
              props: {
                currentProduct: productAds.length == currentProduct +1 ? 0 : currentProduct + 1
              },
            },
          )}
        >
          {buttonTitle}
        </button>
      }

      
      </div>
    </div>
  );
}
