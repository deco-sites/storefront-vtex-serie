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
      <div>

        <section.Component
          key={0}
          product={{
            description: section.props.adDescription ?? section.props.description,
            title: section.props.product.title,
            price: section.props.product.price,
            imageSrc: section.props.product.imageSrc
          }}
        />

      {
        <button
          class="bg-orange-400 p-[20px] border-dashed border-2 border-sky-500"
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
