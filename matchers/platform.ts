import { MatchContext } from "deco/blocks/matcher.ts";
import type { Message } from "apps/website/flags/multivariate/message.ts";


export interface Props{
    platform: string;
    message: Message;
}

export default function Platform( props: Props, ctx: MatchContext){
    console.log('CTXXXXXXXXXXX', ctx)
    return ctx.request.headers.get("sec-ch-ua-platform")?.includes(props.platform) ?? false;
}