import { Item } from '../Item/Item';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import './ItemListConainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {id} = useParams()
    

    useEffect(()=>{
        if(id){
            getProductsByCategory(id).then(res=>{
                setProducts(res)
            }).catch(error=>console.log(error))
        }else{
            getProducts().then(res=>{
                setProducts(res)
            }).catch(error=>console.log(error))
        }
    },[id])

    const items = products?.map((producto) => {
        return <Item key={producto.id} producto={producto}/>
    })

    return(
        <div className='itemlist-container'>
            <div className='div-title'>
                <span>Nuestros productos</span>
            </div>
            <div className='items-cointainer'>
                {items}
            </div>
        </div>
    )
}