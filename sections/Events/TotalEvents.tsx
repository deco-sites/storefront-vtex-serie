import { AppContext } from "../../apps/site.ts";

export interface Props{
    getTotalProdEvR: {
        total: string
    }
}

export default function TotalEvents(props: Props){
    return(
        <div className={"flex justify-center content-center"}>
            <div className={"rounded-lg border-black border-2"} >
                <p>Sites Save: { props.getTotalProdEvR.total }</p>
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