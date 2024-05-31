import { Section } from "deco/mod.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import ProductAd from "./ProductAd.tsx"

export interface Props{
    productAds: Section[];
    message: string;
    image: string;
    buttonTitle: string;
}

export default function PartialProductAd({
    message = "I Love this Product!",
    buttonTitle = "Another Product"
}: Props){
    return(
        <div>
            PartialProductAd :)
            {<ProductAd adDescription="Partial Rendering" product={ { "title": "Partial title", "price": "12,99", "imageSrc": "https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk=s256-rw" } } />}
            <button {...usePartialSection(
                {
                    props: {
                        adDescription: "Partial Funcionou!",
                        product: {
                            imageSrc: "https://apps.microsoft.com/assets/icons/logo-256x256.png",
                            title: "Partial Title Alterado",
                            adDescription: "Uma luta",
                            price: "9898,00 ( CARO )"
                        }
                    }
                }
            )}> {buttonTitle} </button>
        </div>
    )
}