import React from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../Item/Item';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const params = useParams();

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

    const producto = listaDeProductos.find(producto=>producto.id == params.id)

    return (
        <div className='item-detail-container'>            
            <div className='div-title'>
                <span>Detalle de producto</span>
            </div>
            <Item producto={producto}/>
        </div>
    )
}
