import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const HomePage = () => {

    const style = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div className='container'>
            <div className='home-sub-container'>
                <img src='./images/logo.png'></img>
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
            
            <div className='showcase-grid'>
                <div className='showcase'>
                    <h1 className='header'>Welcome To Cinefy</h1>
                    <h3 className='sub-header'>Shop for your favorite cinema accessories</h3>
                    <Link to="/products" >
                        <button className='home-btn'>Shop Now</button>
                    </Link>
                </div>

                <img src='./images/showcase.png' className='showcase-img'></img>
            </div>

            
            <footer></footer>
        </div>
    )
}

export default HomePage
