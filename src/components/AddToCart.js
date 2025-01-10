import React, {useState} from 'react';

export const AddToCart = ({item, price}) => {

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const cartItem = {
            item,
            price,
            quantity,
        };

        console.log("Added To Cart: ", cartItem);
    };

    return (
        <div className="add-to-cart">
            <input
                type='number'
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value)) }
                min='1'
            />
            <button onClick={handleAddToCart} >
                Add {quantity} To Cart
            </button>
        </div> 
    );
};