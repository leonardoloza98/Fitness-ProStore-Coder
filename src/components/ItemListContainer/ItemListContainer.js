import { Item } from '../Item/Item';
import './ItemListConainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/index';
import CircularProgress from '@mui/material/CircularProgress';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {id} = useParams()

    
    useEffect(()=>{
        let collectionRef
        if(id){
            collectionRef = query(collection(db, 'listaDeProductos'), where('category', '==', id) )
        }else{
            collectionRef = collection(db, 'listaDeProductos') 
        }

        getDocs(collectionRef).then(res => {
            const productsAdapter = res.docs.map(doc => {
                const data = doc.data()
                return {
                    id: doc.id,
                    ...data
                }
            })
            setProducts(productsAdapter)
        })
    }, [id])

    const items = products?.map((producto) => {
        return <Item key={producto.name} producto={producto}/>
    })

    return(      
        <div className='itemlist-container'>
            <div className='div-title'>
                <span>Nuestros productos</span>
            </div>
            { products.length === 0 ?
            <CircularProgress className='loading'/>
            :    
            <div className='items-cointainer'>
                {items}
            </div>
            }
        </div>
    )
}