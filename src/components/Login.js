import React, {useState, useContext} from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";

export const Login = () => {

    const [email,setEmail] = useState("");
    const {login} = useAuth();

    const handleEmail = async(event) => {

        setEmail(event.target.value);

        try{
            const response = await axios.get("http://localhost:8080/user/get/{email}");
            return(response.data);
        }
        catch(error){
            console.log("Incorrect Email. Try again: ", error);
            return false;
        }
        
    }

    const handleLogin = async() => {

        try{
            const response = await axios.post("http://localhost:8080/user/get/{email}");

            if(response.status === 200){
                const userName = await axios.get("http://localhost:8080/user/get/username/{email}");

                login({email:email, userName:userName});
            }

            /*if (response.status === 200) {
                login({ email: email });

                userName = await axios.get("http://localhost:8080/user/get/{email}");
                
                setTimeout(() => {
                  navigate("/redirecting");
                }, 500);
            }*/
        }
        catch(error){
            console.log("Server error. Try again: ", error);
        }

    }

    return (
        <div className="login">
            <input type="email" placeholder="Enter Email" onChange={handleEmail} />
            <button type="submit" onClick={handleLogin} >Login</button>
        </div>
    );
}