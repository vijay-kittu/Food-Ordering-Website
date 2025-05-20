import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useEffect, useContext } from "react";

export const OrderPlaced = () => {
  const { cart, emptyCart } = useContext(CartContext);
  useEffect(() => {
    emptyCart();
  }, []);

  return (
    <div className="order-placed">
      <p>Your order has been placed!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
