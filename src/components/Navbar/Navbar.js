import React, { useContext } from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from "../../App";
import './Navbar.css';

export const Navbar = () => {
    const {cart} = useContext(AppContext);
    let counterCart = 0;
    cart.forEach(element => {
        counterCart+=1
    });
    const navigate = useNavigate();
    const handleOnClickBrand = () => {
        navigate('/')
    }

    return(
        <div className='navbar-container'>
            <div className='logo' onClick={handleOnClickBrand}>
                <span>Fitness ProStore</span>
            </div>
            <div className='bar-buttons'>
                <Link to={'/about'}>
                    <button className='button'>Sobre nosotros</button>
                </Link>
                <Link to={'/productos'}>
                    <button className='button'>Productos</button>
                </Link>
                <Link to={'/category/1'}>
                    <button className='button'>Suplementos</button>
                </Link>
                <Link to={'/category/2'}>
                    <button className='button'>Elementos</button>
                </Link>
                <Link to={'/carrito'}>
                    <div className='cart-container'>
                        <button className='button'>
                            <CartWidget/>
                        </button>
                        <div className='counter-cart'>
                            <span className='text-cart'>{counterCart === 0 ? '' : counterCart}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}