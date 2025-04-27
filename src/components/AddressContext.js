import React, { createContext, useState, useEffect, useContext } from "react";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  addDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  collection,
} from "firebase/firestore";
import { AuthContext } from "./AuthContext";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const { user } = useContext(AuthContext); // We need user UID
  const [addresses, setAddresses] = useState([]);

  // Fetch addresses when user logs in
  useEffect(() => {
    const fetchAddresses = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            if (data.addresses) {
              setAddresses(data.addresses);
            } else if (data.userName) {
              // if older format (single address)
              setAddresses([
                {
                  userName: data.userName,
                  phoneNumber: data.phoneNumber,
                  address: data.address,
                },
              ]);
            }
          }
        } catch (error) {
          console.error("Error fetching addresses:", error);
        }
      }
    };

    fetchAddresses();
  }, [user]);

  /*const addressesCollectionRef = collection(db, "addresses");

  useEffect (() => {
    const getAddressess = async () => {
      try {
              const data = await getDocs(addressesCollectionRef);
        console.log(data);
      }
      catch(err){
        console.log(err);
      }

    }
  })*/

  // Function to add a new address
  const addAddress = async (newAddress) => {
    if (!user) {
      console.error("User not logged in");
      return;
    }

    try {
      await addDoc(collection(db, "addresses"), {
        ...newAddress,
      });
      setAddresses((prev) => [...prev, newAddress]);
      console.log("New address added!");
    } catch (error) {
      console.error("Error adding address: ", error);
    }
  };

  return (
    <AddressContext.Provider value={{ addresses, setAddresses, addAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
