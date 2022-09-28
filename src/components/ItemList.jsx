import React from "react";
import Item from "./Item";

const ItemList =(props) =>{


    return(
        <div>
            {props.data.map((item) => {
                return(
                    <Item
                        key={item.id}
                        price={item.price}
                        title={item.title}
                        description={item.description}
                        />
                )
            })}
        </div>
    )
}; export default ItemList