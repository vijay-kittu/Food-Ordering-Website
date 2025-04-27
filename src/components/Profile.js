import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { CartContext } from "./CartContext";
import { AddressContext } from "./AddressContext";
///

import { db } from "../firebase";
import {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  collection,
  query,
  where,
} from "firebase/firestore";

///

export const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const { addresses, addAddress } = useContext(AddressContext);

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  ///

  const addressesCollectionRef = collection(db, "addresses");

  /*useEffect(() => {
    const getAddressess = async () => {
      try {
        const data = await getDocs(addressesCollectionRef);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAddressess();
  }, []);
  */

  ///

  const handleAddAddress = async (event) => {
    event.preventDefault();
    if (!userName || !phoneNumber || !address) {
      alert("Please fill all fields");
      return;
    }
    await addAddress({ userName, phoneNumber, address, googleId: user.userId });
    setUserName("");
    setPhoneNumber("");
    setAddress("");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    ///
    const getAddressess = async () => {
      /*try {
        const data = await getDocs(addressesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("This si the data: ", filteredData);
      } catch (err) {
        console.log("The error is: ", err);
      }*/
      try {
        const q = query(
          addressesCollectionRef,
          where("googleId", "==", user.userId)
        );
        const data = await getDocs(q);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        console.log("Filtered addresses: ", filterData);
      } catch (err) {
        console.log("Error fetching: ", err);
      }
    };
    getAddressess();
    ///
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile">
      <div>Welcome, {user?.username}</div>
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
      <div>
        {!addresses || addresses.length === 0 ? (
          <p>No address added: {addresses.length}</p>
        ) : (
          addresses.map((addr, index) => (
            <div key={index} className="cart-item profile-cart">
              <div className="cart-subitem profile-subitem">
                <p>Name: {addr.userName}</p>
                <p>Phone Number: {addr.phoneNumber}</p>
                <p>Address: {addr.address}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        <h3>Add New Address:</h3>
        <form onSubmit={handleAddAddress}>
          <input
            value={userName}
            type="text"
            placeholder="Name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            value={phoneNumber}
            type="number"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            value={address}
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <button type="submit">Add Address</button>
        </form>
      </div>
      {/*<Link to="/">Add Address</Link>*/}
      <button type="submit" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
