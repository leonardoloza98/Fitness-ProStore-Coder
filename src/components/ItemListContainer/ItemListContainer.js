import { Item } from '../Item/Item';

import './ItemListConainer.css';

export const ItemListContainer = () => {
    const listaDeProductos = [
        {
            id: 1,
            name: 'Proteína',
            description: 'Proteina al 80%',
            price: '$4500',
            img: '../../Images/Proteina.png'
        },
        {
            id: 2,
            name: 'Creatina',
            description: 'Creatina isolada',
            price: '$6500',
            img: '../../Images/Proteina.png'
        },
        {
            id: 3,
            name: 'Colágeno',
            description: 'Con acido hialunorico',
            price: '$4000',
            img: '../../Images/Proteina.png'
        },
        {
            id: 4,
            name: 'Mancuernas',
            description: 'Mancuernas de 10kg',
            price: '$8500',
            img: '../../Images/Proteina.png'
        },
    ]

    return(
        <div className='itemlist-container'>
            <div className='div-title'>
                <span>Nuestros productos</span>
            </div>
            <div className='items-cointainer'>
                {listaDeProductos.map((producto) => {
                    return <Item producto={producto}/>
                })}
            </div>
        </div>
    )
}