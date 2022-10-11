import { useState } from "react";
import CounterButton from "./Button"

const ItemCount=(props,onAddToCart )=>{
    const [itemNumber, setItemNumber] = useState(0);
    const [stock, setStock] = useState(10);

    function increaseHandler(){
        if(itemNumber<=stock){
            setItemNumber(itemNumber => itemNumber + 1)
            setStock(stock => stock - 1)
        }
    }

    function decreaseHandler(){
        if(itemNumber<1){
            console.log("Ya tienes 0 unidades")
        }
        else{
            setItemNumber(itemNumber => itemNumber - 1)
            setStock(stock => stock + 1)
        }
    }

    return (
        <div>
          Current amount: {itemNumber}
          <div>
          <CounterButton onClick={increaseHandler}>+</CounterButton>
          <CounterButton onClick={decreaseHandler}>-</CounterButton>
          </div>
          <div>
          <button onClick={()=> props.onAddToCart()}>Agregar al carrito</button>
          </div>
        </div>
      );
}; export default ItemCount