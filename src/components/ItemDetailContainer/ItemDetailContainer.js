import React, { useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../Item/Item';
import { AppContext } from '../../App';
import { doc, getDoc} from 'firebase/firestore';
import { db } from '../../services/firebase/index';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [unidades, setUnidades] = useState(0)
    const {id} = useParams();
    
    const {addProductToCart} = useContext(AppContext)

    useEffect(()=>{
        const docRef = doc(db, "listaDeProductos", id);
        getDoc(docRef).then(res=>{
            const data = res.data()
            const producto = {
                id: res.id,
                ...data
            }
            setProducto(producto)
        });
    }, [id])
    
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
                <button className={unidades===0 ? 'button-disabled' : 'button-agregar'} onClick={handleAddProduct} disabled={unidades===0}>
                    AGREGAR    
                </button>
            </div>
        </div>
    )
}
