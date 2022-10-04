import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import getPets from "../mockAPI";
import PetCard from "./Pet";

const PetListContainer = () =>{
    let [data, setData] = useState([]);

   useEffect(()=>{
    console.log("UseEffect")
        getPets().then((dataResponse) => {
            setData(dataResponse)
        })    
    },
    []
   )
    return(
        <div>
            {
                data.map( (pet) => {
                    return (
                    <PetCard
                            name={pet.name}
                            description ={pet.description}
                            age = {pet.age}
                    />);}
                )
                }
        </div>
    )
};export default PetListContainer