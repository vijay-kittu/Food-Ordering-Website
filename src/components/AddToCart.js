/*import React, { useState } from "react";
import App from "../App";

export const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  /*const handleAddToCart = () => {
        const cartItem = {
            item,
            price,
            quantity,
        };

        console.log("Added To Cart: ", cartItem);
    };
  /*return (
        <div className="add-to-cart">
            <input
                type='number'
                
                onChange={handleCart}
                min='1'
            />
            <button onClick={handleCart} >
                Add {quantity} To Cart
            </button>
        </div> 
    )
};
*/

import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export const AddToCart = () => {
  const { cart } = useContext(CartContext);

  return (
    /*<div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <h4>{item.itemName}</h4>
                        <p>Price: ₹{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))
            )}
        </div>*/
    <div className="cart">
      <h2>Cart</h2>

      <hr />
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-subitem">
              <p>{item.itemName}</p>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="space-block"></div>
              <p className="right-align">
                Total Price: {item.price * item.quantity}
              </p>
            </div>
          </div>
        ))
      )}

      {/*<h3>Total Amount: {total}</h3>*/}
      <hr />
      <h3>
        Total Amount: ₹
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
};
