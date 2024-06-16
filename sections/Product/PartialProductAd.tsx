import { Section } from "deco/mod.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import { useSignal } from "@preact/signals";
import type {
  ProductAdSection
} from "../../components/ui/Types.ts";

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
  // const sectionProps = (section?.props.product && section?.props.product.product) ? section?.props.product : section?.props;

  return (
    <div>
      
      <div className={" hover:animate-animate__headShake relative z-[50] translate-x-0 flex pb-2 justify-around "}>
      {/* currentProduct: { currentProduct } <br />
      sectionPropsPARTIAL : {JSON.stringify(section.props, null, 2)} <br /> */}
        <section.Component
          key={currentProduct}
          {
            ...section.props
          }
  
        />

      {
        <button
          class="bg-orange-400 p-[4px] border-dashed border-2 border-sky-500 block my-auto"
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
