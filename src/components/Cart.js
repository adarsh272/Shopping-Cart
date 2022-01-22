import React from 'react'
import './cart.css'

const Cart = ({cartItems, addItems, removeItems}) => {

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)

    return (
        // <div className='main-container'>
        //     <img src='./images/logo.png' className='logo'></img>
        //     <h1>Your Cart</h1>
        //     {cartItems.length === 0 && <div>Cart is Empty</div>}
        //     {cartItems.map((item) => (
        //         <div className='sub-container'>
        //             <div className='cart-container' key={item.id}>
        //                 <div className='flex-1'>
        //                     <div className='title'>
        //                         <img src={item.image}></img>
        //                         <div className='header'>{item.title}</div>
        //                     </div>
        //                     <div className='btn-qty'>
        //                         <button onClick={() => addItems(item)}>+</button>
        //                         <div>{item.qty}</div>
        //                         <button onClick={() => removeItems(item)}>-</button>
        //                     </div>
        //                     <div className='single-price'>{item.price}</div>
        //                     <div className='sub-total'>${item.qty * item.price}</div>

        //                 </div>
        //                 <br></br>
        //                 <hr></hr>
                    
        //             </div>
        //         </div>
                
        //         // <div key={item.id}>
        //         //     <div>{item.title}</div>
        //         //     <button onClick={() => addItems(item)}>+</button>
        //         //     <button onClick={() => removeItems(item)}>-</button>
        //         //     <div>{item.qty} x {item.price}</div>
        //         // </div>
        //     ))}
        //     {cartItems.length !== 0 && (
        //         <div>Total: {totalPrice}</div>
        //     )}
        // </div>

        <div className='main-container'>
            <img src='./images/logo.png' className='logo'></img>
            <h1>Your Cart</h1>
            <div className='sub-container'>
                <div className='cart-container'>
                    {cartItems.length === 0 && <div>Your Cart is Empty</div>}
                    {cartItems.map((item) => 
                    <div>
                        <div className='flex-1'>
                            <div className='title'>
                                <img src={item.image}></img>
                                <div className='header'>{item.title}</div>
                            </div>
                            <div className='btn-qty'>
                                <button onClick={() => addItems(item)}>+</button>
                                <div>{item.qty}</div>
                                <button onClick={() => removeItems(item)}>-</button>
                            </div>
                            <div className='single-price'>${item.price}</div>
                            <div className='sub-total'>${item.qty * item.price}</div>
                        </div>
                        <hr></hr>
                    </div>)}
                    
                    
                    {cartItems.length !== 0 && (
                    <div className='total'>Total: {totalPrice}</div>)}
            
                </div>
                
            </div>
            <div className='checkout-div'>
                <button className='checkout-btn'>Checkout</button>
            </div>
        </div>
        
        
        // <div class="container">

        //     <div class="flex-1">
        //         <div class="title" style="display: flex; flex-direction: row;">
        //             <img src="dune.jpg" alt=""></img>
        //             <div class="header">Product 1</div>
        //         </div>
        //         <div class="btn-qty">
        //             <button>+</button>
        //             <div>2</div>
        //             <button>-</button>
        //         </div>
        //         <div className='single-price'>$80</div>
        //         <div className='sub-total'>$160</div>
        //     </div> 
        
        //     <br></br>
        //     <hr></hr>
        // </div>
            
    )
}

export default Cart
