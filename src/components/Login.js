import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { login, user } = useAuth();

  useEffect(() => {
    if (user && user.email && user.userName) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        email,
      });

      if (response.status === 200) {
        const userName = await axios.get(
          `http://localhost:8080/user/get/username/${email}`
        );

        login({ email: email, userName: userName.data });

        setTimeout(() => {
          navigate("/");
        });
      }
    } catch (error) {
      console.log("Server error. Try again: ", error);
    }
  };

  return (
    <div className="login">
      <div>
        <input type="email" placeholder="Enter Email" onChange={handleEmail} />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="note">This page is under development.</div>

      <Link to="/register">New user? Register here.</Link>
    </div>
  );
};
