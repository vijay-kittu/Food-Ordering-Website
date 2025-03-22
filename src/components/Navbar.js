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
        <Link className="links " to="/login">
          {" "}
          Profile{" "}
        </Link>
        <a href="https://portfolio-vijaykrishna.vercel.app/">My Portfolio</a>
      </div>
    </div>
  );
};
