import './App.css';
import {useState} from 'react';
import {Notifications} from "./components/Notifications.js";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Home} from "./components/Home.js"; 
import {Cart} from "./components/Cart.js";
import {Profile} from "./components/Profile.js"; 
import {NotFound} from "./components/NotFound.js";
import {Navbar} from "./components/Navbar.js"; 
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { AuthProvider } from './components/AuthContext.js';
import { ContactUs } from './components/ContactUs.js';
import { SubItems } from './components/SubItems.js';
import { AddToCart } from './components/AddToCart.js';



function App() {

  /*const [cart, setCart] = useState({
          itemName:"",
          price:null,
          quantity:null
      });

  const handleCart = (event) => {
    setCart({...cart, [q]:event.target.value});
  }*/



  /*const [contactIsVisible,setContactIsVisible] = useState(false);

  function handleClose(contactIsVisible) {
    setContactIsVisible(!contactIsVisible);
  }*/
  return (
    <AuthProvider>
      <div className="App">

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/addtocart" element={<AddToCart  />} />
            <Route path="/subitems" element={<SubItems  />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>

        <ContactUs />
      </div>
    </AuthProvider>
  );
}

export default App;
