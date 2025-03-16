import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const OrderPlaced = () => {
  const { cart, emptyCart } = useAuth();

  return (
    <div className="order-placed">
      <p>Your order has been placed!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
