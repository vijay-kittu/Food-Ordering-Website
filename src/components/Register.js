import { useState } from "react";
import axios from "axios";

export const Register = () => {

    const [user, setUser] = useState({
        userName:"",
        email:""
    });

    const handleInput = (event) => {
        setUser({[event.target.name] : event.target.value});
    }

    const handleUser = async() => {
        const response = await axios.post("http://localhost:8080/user/register", user);
        console.log("User added:", response.data);
    }

    return(
        <div className="register">
            <input type="text" placeholder="Username..." value={user.userName} onChange={handleInput} />
            <input type="email" placeholder="Email..." value={user.email} onChange={handleInput} />
            <button type="submit" onClick={handleUser} >Register</button>
        </div>
    );
}