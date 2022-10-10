import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { Item } from '../Item/Item';
import { AppContext } from '../../App';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [unidades, setUnidades] = useState(0)
    const params = useParams();
    
    const {addProductToCart} = useContext(AppContext)

    useEffect(()=>{
        getProducts().then(productos=>{
            try{
                const product = productos.filter(producto => Number(producto.id)===Number(params.id))
                setProducto(product[0])
            }catch(error){
                console.log(error)
            }
        })
    })
    
    const handleAdd = () => {
        setUnidades(unidades+1)
    }

    const handleRemove = () => {
        setUnidades(unidades-1)
    }

    const handleAddProduct = () => {
        addProductToCart({...producto, unidades})
    }

    return (
        <div className='item-detail-container'>            
            <div className='div-title'>
                <span>Detalle de producto</span>
            </div>
            <Item producto={producto}/>
            <div className='div-contador'>
                <button className='button-contador' onClick={handleRemove} disabled={unidades===0}>-</button>
                <span className='span-contador'>{unidades}</span>
                <button className='button-contador' onClick={handleAdd}>+</button>
            </div>
            <div className='div-button-agregar'>
                <button className='button-agregar' onClick={handleAddProduct} disabled={unidades===0}>
                    AGREGAR    
                </button>
            </div>
        </div>
    )
}
