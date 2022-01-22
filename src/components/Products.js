import React from 'react'
import './products.css'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Products = ({ product, addItems }) => {

    const style = {
        textDecoration: 'none',
        color: 'black'
    }

    const style_logo = {
        marginTop: 31 + "px",
        marginLeft: 147 + "px"
    }

    return (
        <div class="products-container">
            <div className='home-sub-container'>
                <Link to='/' style={style_logo}>
                    <img src='./images/logo.png' className='logo'></img>
                </Link>
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
            </div>
            
            <h2 className='heading'>Our Products</h2>    
            <div class="card-grid">
                   {
                    product.map((con) => {
                        return (<div class="card" key={con.id}>
                            <div class="card-header card-image">
                                <img src={con.image} alt=""></img>
                            </div>
                            <div class="card-body">
                                <h4 class="title">{con.title}</h4>
                                <p>{con.description}</p>
                                <h4>${con.price}</h4>
                            </div>
                            <div class="card-footer">
                                <button class="button" onClick={() => addItems(con)}>Add To Cart</button>
                            </div>
                        </div>)
                            
                        })
                        
                    }
            </div>
        
        </div>
    
    )
}

export default Products
