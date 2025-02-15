import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

export const Profile = () => {

    const {user, logout} = useAuth();
    
    const navigate= useNavigate();

    useEffect(() => {
        if(!user) {
            navigate("/login");
        }
    },[user, navigate]);

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return (
        <div className="profile">
            <div>Welcome, {user.userName}</div>
            <p>Email: {user.email}</p>
            <button type="submit" onClick={handleLogout}>Logout</button>
        </div> 
    );
}