import { SectionProps } from "deco/types.ts";
import { AppContext } from "../../apps/site.ts";

export interface Props{

}

export default function TotalEvents(props: SectionProps<typeof loader>){
    return(
        <div className="flex w-[max-content] m-auto bg-white p-2 border-2 border-green-300 rounded px-4"> 
            <div className="text-black uppercase"> 
                <p> Site Saves: { props.getTotalProdEvR.total } </p>
            </div>
        </div>
    )
}

export const loader = async (props: Props, _req: Request, ctx: AppContext) => {

    const getTotalProdEv = await fetch(`https://camp-api.deco.cx/events`, {
        method: "GET",
        headers: {
          'x-api-key': "storefront-vtex-serie"
        }
      });
    
    const getTotalProdEvR = await getTotalProdEv.json();
    return { 
        ...props,
        getTotalProdEvR,
        device: ctx.device };
  };