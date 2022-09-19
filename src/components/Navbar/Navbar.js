import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import './Navbar.css';

export const Navbar = () => {
    return(
        <div className='navbar-container'>
            <div className='logo'>
                <span>Fitness ProStore</span>
            </div>
            <div className='bar-buttons'>
                <button className='button'>Sobre nosotros</button>
                <button className='button'>Productos</button>
                <button className='button'>
                    <CartWidget></CartWidget>
                </button>
            </div>
        </div>
    )
}