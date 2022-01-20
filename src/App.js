import './App.css';
import HomePage from './components/HomePage';
import Products from './components/Products';
import Contact from './components/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import content from './components/product.js'
import Cart from './components/Cart';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([])

  const addItems = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if(exists){
      setCartItems(cartItems.map((item) => 
        item.id === product.id ? {...exists, qty : exists.qty + 1}: item
      ))
    }else{
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }

  const removeItems = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if(exists.qty === 1){
      setCartItems(cartItems.filter(item => item.id !== product.id))
    }else{
      setCartItems(cartItems.map((item) => 
        item.id === product.id ? {...exists, qty : exists.qty - 1}: item
      ))
    }
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products product={content} addItems={addItems}/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} addItems={addItems} removeItems={removeItems}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
