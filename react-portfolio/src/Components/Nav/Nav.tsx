import { Link } from "react-router-dom";
import "./Nav.scss"

const Nav = () => {
    return (
      
      <div className="nav">
        
        <Link className="nav__item" to="/">
          Home
        </Link>

        <Link className="nav__item" to="/about">
          About
        </Link>
  
        <Link className="nav__item" to="/projects">
          Projects 
        </Link>
  
        <a href="#footer" className="nav__item--contact">
          Get in touch
        </a>
      </div>
    );
  };
  
  export default Nav;