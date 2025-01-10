import { SubItems } from "./SubItems";
import React, {useState} from "react";

export const ItemsGrid = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [cart, setCart] = useState([]);

    const handleImageClick = (constantId) => {
        setSelectedItem(constantId);
    };

    const addToCart = (item, quantity) => {
        setCart ((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.item === item);
            if (existingItem) {
                return prevCart.map(cartItem => 
                    cartItem.item === item ? {...cartItem, quantity : cartItem.quantity + quantity} : cartItem
                );
            }
            else {
                return [...prevCart, {item,quantity}];
            }

        });
    };

    return (
        <div>
            <div className='items-grid'>
                <div className='item-group group1'>
                    <img src='/images/group_shawarma.jpg'  
                    onClick={() => handleImageClick(1)}
                    alt='Shawarmas'  />
                    <h3>Shawarma</h3>
                </div>
                <div className='item-group group2'>
                    <img src='/images/group_biryani.jpg'alt='Biryani' 
                     onClick={() => handleImageClick(2)} 
                    />
                    <h3>Biryani</h3>
                </div>            
                <div className='item-group group1'>
                    <img src='/images/group_cold_drinks.jpg' 
                     onClick={() => handleImageClick(3)}
                     alt='Cold Drinks' />
                    <h3>Cold Drinks</h3>
                </div>
                <div className='item-group group2'>
                    <img src='/images/group_fried_rice.jpg' 
                     onClick={() => handleImageClick(4)}
                     alt='Fried Rice' />
                    <h3>Fried Rice</h3>
                </div>       
                <div className='item-group group1'>
                    <img src='/images/group_sandwiches.jpg' 
                    onClick={() => handleImageClick(5)} 
                    alt='Sandwiches' />
                    <h3>Sandwich</h3>
                </div>            
                <div className='item-group group1'>
                    <img src='/images/group_noodles.jpg' 
                    onClick={() => handleImageClick(6)}
                     alt='Noodles' />
                    <h3>Noodles</h3>
                </div>
                <div className='item-group group1'>
                    <img src='/images/group_parathas.jpg' 
                    onClick={() => handleImageClick(7)}
                     alt='Parathas' />
                    <h3>Parathas</h3>
                </div>
                <div className='item-group group1'>
                    <img src='/images/group_frankies.jpg' 
                    onClick={() => handleImageClick(8)}
                     alt='Frankies' />
                    <h3>Franky</h3>
                </div>
                <div className='item-group group1'>
                    <img src='/images/group_veg_gravy.jpg' alt='Veg Gravy'
                      onClick={() => handleImageClick(9)} 
                    />
                    <h3>Veg Gravy</h3>
                </div>
                <div className='item-group group1'>
                    <img src='/images/group_nonveg_gravy.jpg' 
                    onClick={() => handleImageClick(10)}
                     alt='Nonveg Gravy' />
                    <h3>Nonveg Gravy</h3>
                </div>
                <div className='item-group group1'>
                    <img src='/images/group_dry_item.jpg' 
                    onClick={() => handleImageClick(11)}
                     alt='Chinese Dry Items' />
                    <h3>Chinese Dry Items</h3>
                </div>
                <div className='item-group group1'>
                    <img src='/images/group_snacks.jpg' 
                    onClick={() => handleImageClick(12)}
                     alt='Snacks' />
                    <h3>Snacks</h3>
                </div>
            </div>

            <SubItems selectedItem={selectedItem }  addToCart={addToCart} />

        </div>

    );
}