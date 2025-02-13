import {AddToCart} from "./AddToCart";
import React from "react";

export const SubItems = ({ selectedItem }) => {

    const SubItem = {
        
        1:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/chicken_biryani.jpg" alt='Chicken Biryani' />
                <div className="subitem-details">
                    <h3>Chicken Biryani</h3>
                    <p>₹75</p>
                </div>
                <AddToCart item = 'Chicken Biryani' price={75} /> 
            </div>
            <div className='subitem'>
                <img src="/images/chicken_biryani.jpg" alt='Chicken Biryani' />
                <div className="subitem-details">
                    <h3>Chicken Biryani</h3>
                    <p>₹75</p>
                </div>
                <AddToCart /> 
            </div>
            <div className='subitem'>
                <img src="/images/chicken_biryani.jpg" alt='Chicken Biryani' />
                <div className="subitem-details">
                    <h3>Chicken Biryani</h3>
                    <p>₹75</p>
                </div>
                <AddToCart /> 
            </div>
            <div className='subitem'>
                <img src="/images/chicken_biryani.jpg" alt='Chicken Biryani' />
                <div className="subitem-details">
                    <h3>Chicken Biryani</h3>
                    <p>₹75</p>
                </div>
                <AddToCart /> 
            </div>
            <div className='subitem'>
                <img src="/images/chicken_biryani.jpg" alt='Chicken Biryani' />
                <div className="subitem-details">
                    <h3>Chicken Biryani</h3>
                    <p>₹75</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
        ,
        2: 
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h3>Paneer Butter Masala</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h3>Paneer Butter Masala</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h3>Paneer Butter Masala</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h3>Paneer Butter Masala</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
        ,
        3:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h3>Paneer Butter Masala</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
        ,
        4:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h3>Paneer Butter Masala</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
        ,
        5:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h3>Paneer Butter Masala</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
        ,
        6:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h3>Paneer Butter Masala</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
        ,
        7:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h3>Paneer Butter Masala</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
        ,
        8:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h3>Paneer Butter Masala</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
        ,
        9:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/paneer_butter_masala.jpg" alt='Paneer Butter Masala' />
                <div className="subitem-details">
                    <h3>Paneer Butter Masala</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
        ,
        10:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/group_nonveg_gravy.jpg" alt='Chicken Gravy' />
                <div className="subitem-details">
                    <h3>Chicken Gravy</h3>
                    <p>₹55</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
        ,
        11:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/group_dry_item.jpg" alt='Chicken Manchurian' />
                <div className="subitem-details">
                    <h3>Chicken Manchurian</h3>
                    <p>₹45</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
        ,
        12:
        <div className='subitems'>
            <div className='subitem'>
                <img src="/images/group_snacks.jpg" alt='Lays' />
                <div className="subitem-details">
                    <h3>Lays</h3>
                    <p>₹15</p>
                </div>
                <AddToCart /> 
            </div>
        </div>
    };

    return (
        <div>
            {SubItem[selectedItem]}
            {/*{SubItem[selectedItem] || <div>Please select a food item.</div>}*/}
        </div>
    );


    {/*2: const VegGravy = () => {
        return (
            
        );*/}
};


