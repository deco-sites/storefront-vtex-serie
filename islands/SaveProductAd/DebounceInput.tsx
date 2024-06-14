import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { invoke } from "../../runtime.ts";


export default  function DebounceInput(){
    const [inputValue, setInputValue] = useState("");

    const totalVotes = useSignal(0);
    const productComments = useSignal([]);
  
    const handleInputChange = (event: any) => {
      setInputValue(event.target.value);
    };
    
  
    useEffect(  () => {
      const timeoutId = setTimeout( async () => {

        const comments = await invoke.site.loaders.events.productsEvents({
          productId: inputValue,
        });

        console.log('comments', comments)


        totalVotes.value = comments?.comments.length ?? 0;
        productComments.value = comments?.comments;

      }, 500);
      return () => clearTimeout(timeoutId);
    }, [inputValue]);
  
    return (
      <div className={"mt-4 max-w-[300px]"}>
        <div className="indicator bg-white px-4 border-2 border-green-300 rounded ">
          <span className="indicator-item badge badge-secondary">{totalVotes.value} Comments </span> 
          <div className="grid w-32 h-32 place-items-center bg-white">
            <p className={"text-black uppercase mb-2"}>Digite o ID do produto:</p>
            <input className={" bg-green-200 w-[100%] border-2 border-green-300 rounded text-center"} type="text" value={inputValue} placeholder="Id" onInput={handleInputChange} /> 
          </div>
          
        </div>
        <div className={"flex flex-wrap"}>
          {productComments.value && <p className={"block"}>Comments:</p> }
            <div>{(productComments.value && productComments.value.length) && 
                productComments.value.map(function(comment: string){
                  if(comment.length > 4){
                    return(
                      <div className={"border-b-2 border-green-400 py-2"}> {comment} </div>
                    )
                  }
                })
              }</div>
          </div>
      </div>
    );
  };