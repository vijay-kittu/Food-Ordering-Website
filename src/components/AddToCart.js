import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export const AddToCart = () => {
  const { cart } = useContext(CartContext);

  return (
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

      <hr />
      <h3>
        Total Amount: ₹
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
};
