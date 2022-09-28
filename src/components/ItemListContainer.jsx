import getItems from "../mockAPI";
import { useState, useEffect } from "react";
import ItemList from "./ItemList"

const ItemListContainer =() =>{

    const [data, setData] = useState([])

    useEffect(
        () =>{
            getItems().then((infoProd) =>{
                setData(infoProd)
            })
        }
    )

    return(
        <div>
            <ItemList data={data}/>
        </div>
    )
}; export default ItemListContainer