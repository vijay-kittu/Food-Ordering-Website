import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div >
                <Link className="homepage"  to="/"> 𝓑𝓪𝓮 𝓢𝓾𝔃𝔂 </Link>
            </div>
            <div className="right">
                <Link className="links " to="/cart"> Cart </Link>
                <Link className="links " to="/notifications"> Notifications </Link>
                <Link style={{marginRight:'10px'}} className="links " to="/login"> My Profile </Link>
            </div>
            
        </div>
    );
}