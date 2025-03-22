import React, { useState, useContext } from "react";
import "../App.css";
import { CartContext } from "./CartContext";
import { AddToCart } from "./AddToCart";

export const SubItems = ({ selectedItem }) => {
  const { cart, setCart } = useContext(CartContext); // Initialize cart as an array
  const [tempItem, setTempItem] = useState({
    itemName: "",
    price: null,
    quantity: 1,
  });
  const [total, setTotal] = useState(0);

  const handleItem = (e) => {
    const itemDiv = e.target.closest(".subitem");
    const itemName = itemDiv.querySelector("h4").innerText;
    const price = parseInt(
      itemDiv.querySelector("p").innerText.replace("₹", ""),
      10
    );
    const quantity = parseInt(e.target.value, 10) || 1; // Default to 1 if empty

    setTempItem({ itemName, price, quantity }); // Update tempItem only
  };

  const handleCart = () => {
    if (!tempItem.itemName || !tempItem.price) return; // Ensure valid item
    setCart((prevCart) => [...prevCart, tempItem]); // Add new item to cart
    console.log("Cart after adding:", [...cart, tempItem]);
    setTotal(total + tempItem.quantity * tempItem.price);
  };

  const SubItem = {
    1: (
      <div className="subitems">
        <div className="subitem">
          <img src="/images/chicken_biryani.jpg" alt="Chicken Shawarma" />
          <div value className="subitem-details">
            <h4 name="itemName">Chicken Shawarma</h4>

            <p name="price">₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/chicken_biryani.jpg" alt="Paneer Shawarma" />
          <div className="subitem-details">
            <h4>Paneer Shawarma</h4>
            <p>₹75</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/chicken_biryani.jpg"
            alt="Chicken PeriPeri Shawarma"
          />
          <div className="subitem-details">
            <h4>Chicken PeriPeri Shawarma</h4>
            <p>₹75</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/chicken_biryani.jpg" alt="Chicken Biryani" />
          <div className="subitem-details">
            <h4>Paneer Tagda Shawarma</h4>
            <p>₹75</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
    2: (
      <div className="subitems">
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Chicken Biryani" />
          <div className="subitem-details">
            <h4>Chicken Biryani</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Egg Biryani" />
          <div className="subitem-details">
            <h4>Egg Biryani</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Veg Biryani" />
          <div className="subitem-details">
            <h4>Veg Biryani</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Paneer Biryani" />
          <div className="subitem-details">
            <h4>Paneer Biryani</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
    3: (
      <div className="subitems">
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Cocal Cola" />
          <div className="subitem-details">
            <h4>Coca Cola</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Sprite" />
          <div className="subitem-details">
            <h4>Sprite</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="MinuteMaid Pulpy Orange"
          />
          <div className="subitem-details">
            <h4>MinuteMaid Pulpy Orange</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Amul Lassi" />
          <div className="subitem-details">
            <h4>Amul Lassi</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Amul Butter Milk" />
          <div className="subitem-details">
            <h4>Amul Butter Milk</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
    4: (
      <div className="subitems">
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Paneer Fried Rice" />
          <div className="subitem-details">
            <h4>Paneer Fried Rice</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Chicken Fried Rice"
          />
          <div className="subitem-details">
            <h4>Chicken Fried Rice</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Egg Fried Rice" />
          <div className="subitem-details">
            <h4>Egg Fried Rice</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
    5: (
      <div className="subitems">
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Paneer Cheese Sandwich"
          />
          <div className="subitem-details">
            <h4>Paneer Cheese Sandwich</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Veg Cheese Sandwich"
          />
          <div className="subitem-details">
            <h4>Veg Cheese Sandwich</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Chicken Cheese Sandwich"
          />
          <div className="subitem-details">
            <h4>Chicken Cheese Sandwich</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Egg Cheese Sandwich"
          />
          <div className="subitem-details">
            <h4>Egg Cheese Sandwich</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
    6: (
      <div className="subitems">
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Paneer Schezwan Noodles"
          />
          <div className="subitem-details">
            <h4>Paneer Schezwan Noodles</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Chicken Schezwan Noodles"
          />
          <div className="subitem-details">
            <h4>Chicken Schezwan Noodles</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Egg Schezwan Noodles"
          />
          <div className="subitem-details">
            <h4>Egg Schezwan Noodles</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Veg Schezwan Noodles"
          />
          <div className="subitem-details">
            <h4>Veg Schezwan Noodles</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
    7: (
      <div className="subitems">
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Paneer Paratha" />
          <div className="subitem-details">
            <h4>Paneer Paratha</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Aloo Paratha" />
          <div className="subitem-details">
            <h4>Aloo Paratha</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Onion Paratha" />
          <div className="subitem-details">
            <h4>Onion Paratha</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Egg Paratha" />
          <div className="subitem-details">
            <h4>Egg Paratha</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
    8: (
      <div className="subitems">
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="PANEER FRANKIE" />
          <div className="subitem-details">
            <h4>Paneer Frankie</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Chicken Frankie" />
          <div className="subitem-details">
            <h4>Chicken Frankie</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Egg Frankie" />
          <div className="subitem-details">
            <h4>Egg Frankie</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Veg Frankie" />
          <div className="subitem-details">
            <h4>Veg Frankie</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
    9: (
      <div className="subitems">
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Paneer Kolhapuri" />
          <div className="subitem-details">
            <h4>Paneer Kolhapuri</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Aloo Bhindi" />
          <div className="subitem-details">
            <h4>Aloo Bhindi</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Paneer Butter Masala"
          />
          <div className="subitem-details">
            <h4>Paneer Butter Masala</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Sev Tamatar" />
          <div className="subitem-details">
            <h4>Sev Tamatar</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
    10: (
      <div className="subitems">
        <div className="subitem">
          <img src="/images/group_nonveg_gravy.jpg" alt="Chicken Gravy" />
          <div className="subitem-details">
            <h4>Chicken Gravy</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Chicken Butter MAsala"
          />
          <div className="subitem-details">
            <h4>Chicken Butter Masala</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Egg masala" />
          <div className="subitem-details">
            <h4>Egg Masala</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Chicken Kadai" />
          <div className="subitem-details">
            <h4>Chicken Kadai</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Chicken Egg mAsala"
          />
          <div className="subitem-details">
            <h4>Chicken Egg Masala</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
    11: (
      <div className="subitems">
        <div className="subitem">
          <img src="/images/group_dry_item.jpg" alt="Chicken Manchurian" />
          <div className="subitem-details">
            <h4>Chicken Manchurian</h4>
            <p>₹45</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Chicken 65 Dry" />
          <div className="subitem-details">
            <h4>Chicken 65 Dry</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Paneer Manchurian" />
          <div className="subitem-details">
            <h4>Paneer Manchurian</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Chicken Crispy" />
          <div className="subitem-details">
            <h4>Chicken Crispy</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
    12: (
      <div className="subitems">
        <div className="subitem">
          <img src="/images/group_snacks.jpg" alt="Lays" />
          <div className="subitem-details">
            <h4>Lays</h4>
            <p>₹15</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Kurkure Chaat" />
          <div className="subitem-details">
            <h4>Kurkure Chaat</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img
            src="/images/paneer_butter_masala.jpg"
            alt="Hide&Seek biscuits"
          />
          <div className="subitem-details">
            <h4>Hide&Seek biscuits</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
        <div className="subitem">
          <img src="/images/paneer_butter_masala.jpg" alt="Aloo Bhujiya" />
          <div className="subitem-details">
            <h4>Aloo Bhujiya</h4>
            <p>₹55</p>
          </div>
          <input type="number" onChange={handleItem} min="1" />
          <button type="submit" id="11" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    ),
  };

  return (
    <div className="subitems-cart">
      <div className="selected-items">{SubItem[selectedItem]}</div>
      <div>
        <AddToCart />
      </div>
    </div>
  );
};
