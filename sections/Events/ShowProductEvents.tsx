import { AppContext } from "../../apps/site.ts";
import DebounceInput from "../../islands/SaveProductAd/DebounceInput.tsx";


export default function ShowProductEvents(props: Props){
    
    return(
        <div className={"flex justify-center content-center"}>
            <DebounceInput  / >
            
        </div>
    )
}

export const loader = async (props: Props, _req: Request, ctx: AppContext) => {
    return { 
        ...props,
        device: ctx.device };
  };