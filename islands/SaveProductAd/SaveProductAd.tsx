import { effect, useSignal, useSignalEffect, signal as _signal } from "@preact/signals";
import postProdEv from "../../actions/SaveProductAd/productsEvents.ts"
import { ProductDetailsPage } from "apps/commerce/types.ts"


import type {
    ProductAd
  } from "../../components/ui/Types.ts";
import Modal from "../../components/ui/Modal.tsx";
import { invoke } from "../../runtime.ts";

export interface Props{
    // product: ProductDetailsPage | null,
    product: ProductAd | null,
    productId: number
}

export default function SaveProductAd( { product, productId }: Props) {

    const openModal = useSignal(false);
    const textAreaModal = useSignal('');

    const changeTextArea = (event: any) => {
         textAreaModal.value = event.target.value;
    };

    const sendpostProdEv = async () =>{

        const comments = await invoke.site.actions.SaveProductAd.productsEvents({
            comment: textAreaModal.value,
            productId : productId
        });

        console.log('res comments', comments)
    }
    

    useSignalEffect(() => {
        //code
        console.log('useSignalEffect hook')
        })
        
        effect(()=>{
            //code
            console.log('effect hook')
    } )

    const saveProduct = ()=> {
        openModal.value = true;
    }

    const ModalChildren = () => {
        type productT = NonNullable<NonNullable<Props['product']>['product']>['product']
        const productOnly: productT = product!.product!.product;
        return <div className={"flex max-w-[500px] bg-cyan-950 rounded-lg p-2"}>
            {product?.product}
            <div className={" w-[35%] flex overflow-hidden"}>
                <img className={"rounded-lg"} src={productOnly.image} alt={productOnly.image} />
            </div>
            <div className={" w-[65%] flex overflow-hidden flex-wrap *:w-[100%] *:leading-[1] *:text-left pl-2 *:text-white space-y-2 *:font-medium "}>
                
                <p className={"mt-2 !text-yellow-500"}>Salvar Produto: <span className={"font-bold text-white"}>{product?.product}</span> </p>

                <span className={"text-lg"}>Observações: </span>

                <textarea className={"!text-stone-950 pt-2"} name="saveProduct" id="saveProduct"
                value={textAreaModal}
                onInput={ changeTextArea }
                ></textarea>

                <p className={"text-white"}> {textAreaModal} </p>

                <div className={"flex justify-end space-x-2 *:border-[1px] *:border-white *:rounded-lg *:p-1"}>
                    <button onClick={()=> openModal.value = false }>
                        Cancelar
                    </button>
                    
                    <button onClick={sendpostProdEv} >
                        Publicar
                    </button>
                </div>
            </div>

        </div>
    }
    
    

    return(
        <div>
            <span 
                className=" cursor-pointer absolute right-3 top-0 bg-secondary border rounded-xl py-1 px-2 text-white border-stone-400 z-[99999] "

                onClick={saveProduct}

            >
                Save
            </span>
            <Modal 
            open={openModal.value} 
            loading={"eager"}
            onClose={() => openModal.value = false}
            >

                < ModalChildren />

            </Modal>
        </div>
    )
}
