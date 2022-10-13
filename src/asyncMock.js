const listaDeProductos = [
    {
        id: 1,
        name: 'Proteína',
        description: 'Proteina al 80%',
        price: 4500,
        img: '../../Images/Proteina.png',
        category: 1
    },
    {
        id: 2,
        name: 'Creatina',
        description: 'Creatina isolada',
        price: 6500,
        img: '../../Images/Proteina.png',
        category: 1
    },
    {
        id: 3,
        name: 'Mancuernas',
        description: 'Mancuernas de 10kg',
        price: 8500,
        img: '../../Images/Proteina.png',
        category: 2
    },    
    {
        id: 4,
        name: 'Soga',
        description: 'Soga de 2 metros',
        price: 2200,
        img: '../../Images/Proteina.png',
        category: 2
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject)=>{
        try{
            setTimeout(()=>{
                resolve(listaDeProductos)
            }, 200)
        }catch(error){
            reject(error)
        }
    })
}

export const getProductsByCategory = (id) => {
    return new Promise((resolve, reject)=>{
        try{
            setTimeout(()=>{
                console.log(id)
                const listaDeProductosByCategory = listaDeProductos.filter(producto=>producto.category===Number(id))
                console.log("lista: ", listaDeProductosByCategory)
                resolve(listaDeProductosByCategory)
            }, 200)
        }catch(error){
            reject(error)
        }
    })
}