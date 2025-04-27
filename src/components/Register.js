import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext, useAuth } from "./AuthContext";

export const Register = () => {
  /*const [user, setUser] = useState({
    userName: "",
    email: "",
  });*/

  const { setUser } = useAuth(AuthContext);
  const navigate = useNavigate();

  /////////////////////////////////

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google login successful:", result.user);
      setUser(result.user.displayName);
      navigate("/profile");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("Email login successful:", result.user);
    } catch (error) {
      console.error("Email login error:", error);
    }
  };

  ////////////////////////////////

  /*const handleInput = (event) => {
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  };

  const handleUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/user/register",
        user
      );
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      console.log("User added:", response.data);
    } catch (error) {
      console.log("Error occured: ", error);
    }
  };*/

  return (
    <div className="register">
      {/*<input
        type="text"
        name="userName"
        placeholder="Username..."
        value={user.userName}
        onChange={handleInput}
      />
      <input
        type="email"
        name="email"
        placeholder="Email..."
        value={user.email}
        onChange={handleInput}
      />
      <button type="submit" onClick={handleUser}>
        Register
      </button>*/}

      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login with Email</button>
      </form>
      <br />
      <br />
      <button onClick={handleGoogleLogin} className="google-login">
        Login with Google
      </button>
      <div className="note">This page is under development.</div>
    </div>
  );
};
