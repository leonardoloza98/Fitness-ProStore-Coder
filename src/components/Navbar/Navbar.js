import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
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
                    <button className='button'>
                        <CartWidget/>
                    </button>
                </Link>
            </div>
        </div>
    )
}