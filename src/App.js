import './App.css';
import {useState} from 'react';
import {Notifications} from "./components/Notifications.js";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Home} from "./components/Home.js"; 
import {Cart} from "./components/Cart.js";
import {Profile} from "./components/Profile.js"; 
import {NotFound} from "./components/NotFound.js";
import {Navbar} from "./components/Navbar.js"; 



function App() {

  const [contactIsVisible,setContactIsVisible] = useState(false);

  function handleClose(contactIsVisible) {
    setContactIsVisible(!contactIsVisible);
  }
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />


        </Routes>
      </Router>

      {/*<div className="contact-button" onClick={() => handleClose(contactIsVisible)}>
        <p>Contact Us</p>
      </div>

      {contactIsVisible && (<Contact_Page />)}*/}

      
    </div>
  );
}

export default App;
