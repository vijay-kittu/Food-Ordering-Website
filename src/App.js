import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home.js";
import { Profile } from "./components/Profile.js";
import { NotFound } from "./components/NotFound.js";
import { Navbar } from "./components/Navbar.js";
import { Login } from "./components/Login.js";
import { Register } from "./components/Register.js";
import { AuthProvider } from "./components/AuthContext.js";
import { SubItems } from "./components/SubItems.js";
import { AddToCart } from "./components/AddToCart.js";
import { CartProvider } from "./components/CartContext.js";
import { OrderPlaced } from "./components/OrderPlaced.js";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<AddToCart />} />
              <Route path="/subitems" element={<SubItems />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/order-placed" element={<OrderPlaced />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
