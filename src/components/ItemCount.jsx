import { Button } from "@mui/material";
import { useState } from "react";


const ItemCount=()=>{
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
          <button onClick={increaseHandler}>+</button>
          <button onClick={decreaseHandler}>-</button>
          </div>
        </div>
      );
}; export default ItemCount