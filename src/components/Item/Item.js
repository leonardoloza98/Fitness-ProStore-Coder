import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

export const Item = ({producto}) => {
    const navigate = useNavigate()
    const handleOnClickItem = (id) => {
        navigate(`/productos/${id}`)
    }

    return(
        <div className='card-item' onClick={()=>handleOnClickItem(producto.id)}>
            <div className='item-imagen'>
                <img className='item-imagen-control' src={producto.img} alt={""}></img>
            </div>
            <div className='item-name'>
                {producto.name}
            </div>
            <div className='item-description'>
                {producto.description}
            </div>
            <div className='item-price'>
                ${producto.price}
            </div>
        </div>
    )
}
