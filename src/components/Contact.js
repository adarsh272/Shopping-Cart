import React from 'react'
import './contact.css'
import {FaEnvelope, FaPhone, FaInstagramSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Contact = () => {

    const style = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div class="contact-container">
            <img src='./images/logo.png' className='logo'></img>
            <ul className='nav'>
                <Link to="/" style={style}>
                    <li><a>Home</a></li>
                </Link>
                <Link to="/products" style={style}>
                    <li><a>Products</a></li>
                </Link>
                <Link to="/contact" style={style}>
                    <li><a>Contact</a></li>
                </Link>
                <Link to="/cart" style={style}>
                    <li><a><FaShoppingCart/></a></li>
                </Link>
            </ul>

            
            <h1 className='heading'>Contact Us</h1>
                <div className='main-flex'>
                    <div className='flex-1'>
                        <FaEnvelope style={{fontSize: 30+'px'}}/>
                        <p className='head'>cinefy.buisness@gmail.com</p>
                    </div>  
                    <div className='flex-2'>
                        <FaPhone style={{fontSize: 30+'px'}}/>
                        <p className='head'>022 2345 6789</p>
                    </div>
                    <div className='flex-3'>
                        <FaInstagramSquare style={{fontSize: 30+'px'}}/>
                        <p className='head'>@cine.fy</p>
                    </div>
                    </div>
                </div>
            
    )
}

export default Contact