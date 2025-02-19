
import React,{useState} from "react";
import "../App.css";

export const SubItems = ({ selectedItem }) => {

    

    const [cart, setCart] = useState([]); // Initialize cart as an array
    const [tempItem, setTempItem] = useState({ itemName: "", price: null, quantity: 1 });
    const [total, setTotal] = useState(0);

    const handleItem = (e) => {
        const itemDiv = e.target.closest(".subitem");
        const itemName = itemDiv.querySelector("h4").innerText;
        const price = parseInt(itemDiv.querySelector("p").innerText.replace("₹", ""), 10);
        const quantity = parseInt(e.target.value, 10) || 1; // Default to 1 if empty

        setTempItem({ itemName, price, quantity }); // Update tempItem only
    };

    const handleCart = () => {
        if (!tempItem.itemName || !tempItem.price) return; // Ensure valid item
        setCart((prevCart) => [...prevCart, tempItem]); // Add new item to cart
        console.log("Cart after adding:", [...cart, tempItem]);
        setTotal(total + (tempItem.quantity * tempItem.price));
    };

    const SubItem = {
        
        1:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/chicken_biryani.jpg" alt='Chicken Biryani' />
                <div value className="subitem-details">
                    <h4 name="itemName"  >Chicken Biryani</h4>
                    <p name="price"  >₹75</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                
            </div>
            <div className='subitem'>
                <img src="/images/chicken_biryani.jpg" alt='Chicken Biryani' />
                <div className="subitem-details">
                    <h4>Chicken Biryani</h4>
                    <p>₹75</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
            <div className='subitem'>
                <img src="/images/chicken_biryani.jpg" alt='Chicken Biryani' />
                <div className="subitem-details">
                    <h4>Chicken Biryani</h4>
                    <p>₹75</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
            <div className='subitem'>
                <img src="/images/chicken_biryani.jpg" alt='Chicken Biryani' />
                <div className="subitem-details">
                    <h4>Chicken Biryani</h4>
                    <p>₹75</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
            <div className='subitem'>
                <img src="/images/chicken_biryani.jpg" alt='Chicken Biryani' />
                <div className="subitem-details">
                    <h4>Chicken Biryani</h4>
                    <p>₹75</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
        </div>
        ,
        2: 
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h4>Paneer Butter Masala</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h4>Paneer Butter Masala</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h4>Paneer Butter Masala</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h4>Paneer Butter Masala</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
        </div>
        ,
        3:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h4>Paneer Butter Masala</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
        </div>
        ,
        4:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h4>Paneer Butter Masala</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
        </div>
        ,
        5:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h4>Paneer Butter Masala</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
        </div>
        ,
        6:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h4>Paneer Butter Masala</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
        </div>
        ,
        7:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h4>Paneer Butter Masala</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
        </div>
        ,
        8:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h4>Paneer Butter Masala</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
        </div>
        ,
        9:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h4>Paneer Butter Masala</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
        </div>
        ,
        10:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/group_nonveg_gravy.jpg" alt='Chicken Gravy' />
                <div className="subitem-details">
                    <h4>Chicken Gravy</h4>
                    <p>₹55</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
        </div>
        ,
        11:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/group_dry_item.jpg" alt='Chicken Manchurian' />
                <div className="subitem-details">
                    <h4>Chicken Manchurian</h4>
                    <p>₹45</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
            </div>
        </div>
        ,
        12:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/group_snacks.jpg" alt='Lays' />
                <div className="subitem-details">
                    <h4>Lays</h4>
                    <p>₹15</p>
                </div>
                <input type="number"   onChange={handleItem} min="1" />
                <button type="submit" id="11" onClick={handleCart}  >Add to Cart</button>
                 
            </div>
        </div>
    };

    return (
        <div>
            {SubItem[selectedItem]}
            {/*{SubItem[selectedItem] || <div>Please select a food item.</div>}*/}
            <div>Cart</div>
            {cart.map((item, index) => (
                <div key={index} className="cart-item">
                    <div className="cart-subitem">
                        <h4>{item.itemName}</h4>
                        <p className="right-align">Price: ₹{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                    
                    <p className="right-align">Total Price: {item.price * item.quantity}</p>
                </div>
            ))}
        
        <h3>Total Amount: {total}</h3>    


        </div>
    );


    
};


