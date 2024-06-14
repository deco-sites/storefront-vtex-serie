import { FnContext, allowCorsFor } from "deco/mod.ts";
let ctx: FnContext;
  let req: Request;

export interface Props{
  productId: string
}
  
const getProdEv = async (
  
  props: Props

) => {
  
  const ft =  await fetch(`https://camp-api.deco.cx/event/${props.productId != '' ? props.productId : 0}`, {
    method: "GET",
    headers: {
      'x-api-key': "storefront-vtex-serie"
    }
  }).then((res) => res.json());

  return ft;

  
}

export default getProdEv;

