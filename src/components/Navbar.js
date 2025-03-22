import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link className="homepage" to="/">
          {" "}
          {/*𝓑𝓪𝓮 𝓢𝓾𝔃𝔂*/}FastFeast{" "}
        </Link>
      </div>
      <div className="navbar-block"></div>
      <div className="right">
        <Link style={{ marginRight: "10px" }} className="links " to="/login">
          {" "}
          My Profile{" "}
        </Link>
      </div>
    </div>
  );
};
