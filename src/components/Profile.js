import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext, useAuth } from "./AuthContext";
import { auth, provider } from "../firebase";
import { CartContext } from "./CartContext";

export const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile">
      <div>Welcome, {user}</div>
      {!cart || cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item profile-cart">
            <div className="cart-subitem profile-subitem">
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
      <h3>Select your address:</h3>

      <button type="submit" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
