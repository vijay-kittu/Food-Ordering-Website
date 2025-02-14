import React, {useState} from "react";
import { useContext } from "react";

export const Login = () => {

    const [email,setEmail] = useState("");
    const [userName, setUserName] = useState("");
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
            await axios.post("http://localhost:8080/user/get/{email}");
            if (response.status === 200) {
                login({ email: loginData.userName });
                
                setTimeout(() => {
                  navigate("/redirecting");
                }, 500);
              }
        }
        catch(error){

        }

    }

    return (
        <div className="login">
            <input type="email" placeholder="Enter Email" onChange={handleEmail} />
            <button type="submit" onClick={handleLogin} >Login</button>
        </div>
    );
}