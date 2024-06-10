import { effect, useSignal, useSignalEffect, signal } from "@preact/signals";
import type {
    ProductAd
  } from "../../components/ui/Types.ts";
import Modal from "../../components/ui/Modal.tsx";

export interface Props{
    product: ProductAd
}

export default function SaveProductAd({ product }: Props) {

    const openModal = useSignal(false);
    

    useSignalEffect(() => {
        console.log('useSignalEffect called')
    })

    effect(()=>{
        console.log('openModal changed', openModal)
        console.log('effectttttttt')
    } )

    const saveProduct = ()=> {
        console.log('saveProduct')
        openModal.value = true;
    }

    const ModalChildren = () => {
        return <div className={"flex max-w-[500px] bg-cyan-950 rounded-lg p-2"}>
            
            <div className={" w-[35%] flex overflow-hidden"}>
                <img className={"rounded-lg"} src={product.imageSrc} alt={product.imageSrc} />
            </div>
            <div className={" w-[65%] flex overflow-hidden flex-wrap *:w-[100%] *:leading-[1] *:text-left pl-2 *:text-white space-y-2 *:font-medium "}>
                <p className={"mt-2 !text-yellow-500"}>Salvar Produto: <span className={"font-bold text-white"}>{product.title}</span> </p>

                <span className={"text-lg"}>Observações: </span>

                <textarea className={"!text-stone-950 pt-2"} name="saveProduct" id="saveProduct"></textarea>

                <div className={"flex justify-end space-x-2 *:border-[1px] *:border-white *:rounded-lg *:p-1"}>
                    <button onClick={()=> openModal.value = false }>
                        Cancelar
                    </button>
                    <button>
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
