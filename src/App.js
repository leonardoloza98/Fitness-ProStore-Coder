import './App.css';
import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ResumeCart } from './components/ResumeCart/ResumeCart';
import { About } from './components/About/About';
import { Checkout } from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    return new Promise((resolve, reject)=>{
      try{
        const existProduct = cart.find(producto => producto.name===product.name)
        if(existProduct){
          const productsDistinctName = cart.filter(producto => producto.name!==product.name)
          setCart([
            ...productsDistinctName,
            {
              ...product,
              unidades: product.unidades + existProduct.unidades
            }
          ])
        }else{
          setCart(
            [
              ...cart,
              {...product}
            ]
          )
        }
        resolve(true)
      }catch (error){
        reject(error)
      }
    })
  }

  const removeProductToCart = (product) => {
    const cartRemove = cart.filter(producto => producto.id !== product.id)
    setCart(
      [...cartRemove]
    )
  }

  return (
    <AppContext.Provider value={{cart, addProductToCart, removeProductToCart}}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/productos' element={<ItemListContainer/>}/>
            <Route exact path='/category/:id' element={<ItemListContainer/>}/>
            <Route exact path='/productos/:id' element={<ItemDetailContainer/>}/>
            <Route exact path='/carrito' element={<ResumeCart/>}/>
            <Route path='/' element={<About/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
