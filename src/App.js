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



function App() {

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
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Login />} />
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
