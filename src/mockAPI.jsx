const data =[
    {
        id:1,
        title:"Comida A",
        price:5000,
        stock:15,
        description:"Comida premium",
    },
    {
        id:2,
        title:"Comida B",
        price:4800,
        stock:20,
        description:"Comida premium",
    },
    {
        id:3,
        title:"Comida C",
        price:3000,
        stock:20,
        description:"Segunda marca",
    },
    {
        id:4,
        title:"Comida D",
        price:2900,
        stock:20,
        description:"Segunda marca",
    },
    {
        id:5,
        title:"Comida E",
        price:1000,
        stock:10,
        description:"Tercera marca",
    }
]

function getItems(){
    return new Promise ((resolve,reject) => {
        setTimeout( () =>{
            resolve(data)
        },2500)
    })
};export default getItems