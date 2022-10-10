import { Item } from '../Item/Item';
import { getProducts } from '../../asyncMock';
import './ItemListConainer.css';
import { useEffect, useState } from 'react';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then(res=>{
            setProducts(res)
        }).catch(error=>console.log(error))
    })

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