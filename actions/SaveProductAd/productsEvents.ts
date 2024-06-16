import { FnContext } from "deco/types.ts";
import { invoke } from "../../runtime.ts";


export interface Props{
  comment: string,
  productId: string | number
}

export default async function postProdEv(
  
  props: Props,
  req: Request,
  ctx: unknown

){


    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "storefront-vtex-serie");
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      "productId": props.productId?.toString(),
      "comment": props.comment.toString()
    });

    const requestOptions : object = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const registerEventProduct = await fetch("https://camp-api.deco.cx/event", requestOptions  );

    

    return await registerEventProduct.json()

}

