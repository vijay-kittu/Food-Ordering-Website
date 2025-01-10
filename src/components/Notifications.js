import "../App.css";
import { Navbar } from "./Navbar";

export const Notifications =()=> {
    return (
        <div className='counter'>
            <form className="notifications-page-styles">
                <label className="notifications-page-style " style={{ marginTop: '70px' }} >First Name:</label>
                <input  placeholder="Enter your First Name(mandatory).." type="text" required />
                <label className="notifications-page-style">Last Name:</label>
                <input  type="text" placeholder="Enter your Last Name.." />
                <label className="notifications-page-style">Email:</label>
                <input  type="email" placeholder="Enter your email address(mandatory).." required />
                <label className="notifications-page-style"></label>
                <textarea rows="4" cols="50" style={{resize:"vertical", height:"100px"}} placeholder="Enter your text here(mandatory)..">
                    
                </textarea>
                <br></br>
                <button type="submit" >Submit</button>
            </form>

            <div className='connect'>
                <h3>or Connect with me at:</h3>
                <a target="_blank" href="https://www.linkedin.com/in/vijay-krishna-4b7295253/" >
                    <img src="/images/linkedin.png" alt="Linkedin" />
                </a>
                <a target="_blank" href="https://www.instagram.com/vijay.kittu/" >
                    <img src="../images/instagram.png" alt="Instagram" />
                </a>
            </div>
        </div>
    );
}