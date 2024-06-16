import { MatchContext } from "deco/blocks/matcher.ts";
import wildcard from "npm:wildcard@2.0.1";


export interface Props{
    campanhas: string[];
}

export default function utm( props: Props, ctx: MatchContext){
    const urlOb = new URL(ctx.request.url)
    const urlSearch = new URLSearchParams(urlOb.search)
    if(urlSearch.get('utm_campaing')){
        //verify wildcard
        const utmStr = urlSearch.get('utm_campaing');
        const wildStr = wildcard(utmStr, props.campanhas );
        return wildStr.length
    }

}