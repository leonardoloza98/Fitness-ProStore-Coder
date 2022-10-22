import React, { useContext } from 'react';
import { AppContext } from "../../App";
import DeleteIcon from '@mui/icons-material/Delete';
import './ResumeCart.css';

export const ResumeCart = () => {   
    const {cart, removeProductToCart} = useContext(AppContext);

    const handleRemoveProduct = (producto) => {
        removeProductToCart(producto)
    }

    const ItemCardResume = ({producto}) => {
        return(
            <div className='div-resume-item'>
                <div className='div-image-resume'><img src={producto.img} alt=''></img></div>
                <div className='div-name-resume'>{producto.name}</div>
                <div className='div-name-resume'>{producto.description}</div>
                <div className='div-unidades-resume'>{producto.unidades} unid.</div>
                <div className='div-unidades-resume'>${Number(producto.unidades) * Number(producto.price)}</div>
                <div className='div-button-resume'>
                    <button className='button-delete' onClick={()=>handleRemoveProduct(producto)}>
                        <DeleteIcon/>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='resume-container'>
            <span className='div-title'>
                Resumen de compra
            </span>
            {cart.length !== 0 ? 
            <div>
                {cart.map(producto=>{
                    return <ItemCardResume producto={producto}/>
                })}
            </div>
            :
            <div style={{paddingTop:'30px', textAlign:'center', fontWeight: 'bold'}}>
                Aún no tienes nada agregado al carrito
            </div>       
            }
        </div>
    )
}
