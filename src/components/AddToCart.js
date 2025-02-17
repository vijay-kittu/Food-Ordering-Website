import React, {useState} from 'react';
import App from '../App';

export const AddToCart = ({cart, setCart, handleCart}) => {

    const [quantity, setQuantity] = useState(1);

    /*const handleAddToCart = () => {
        const cartItem = {
            item,
            price,
            quantity,
        };

        console.log("Added To Cart: ", cartItem);
    };*/

    return (
        <div className="add-to-cart">
            <input
                type='number'
                value={quantity}
                onChange={handleCart}
                min='1'
            />
            <button onClick={handleCart} >
                Add {quantity} To Cart
            </button>
        </div> 
    );
};