import { Section } from "deco/mod.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import ProductAd from "./ProductAd.tsx";
import type { ProductAd as productAdType } from "../../components/ui/Types.ts";

export interface Props {
  productAds: Section[];
  title: string;
  image: string;
  buttonTitle: string;
  adDescription: string;
}

export default function PartialProductAd({
  title = "I Love this Product!",
  buttonTitle = "Another Product",
  adDescription,
  image,
}: Props) {
  return (
    <div>
      {
        <ProductAd
          adDescription="Partial First Rendering"
          product={{
            "title": "Partial fitst title",
            "price": "12,99",
            "imageSrc":
              "https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk=s256-rw",
          }}
        />
      }

      <button
        class="bg-orange-400 p-[20px] border-dashed border-2 border-sky-500"
        {...usePartialSection(
          {
            props: {
              adDescription: { adDescription },
              product: {
                imageSrc: { image },
                title: { title },
                adDescription: { adDescription },
                price: "9898,00 ( CARO )",
              },
            },
          },
        )}
      >
        {buttonTitle}
      </button>
    </div>
  );
}
