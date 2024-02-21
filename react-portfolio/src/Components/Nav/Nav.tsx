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
  
        <Link className="nav__item" to="/skills">
          Skills
        </Link>
  
        <Link className="nav__item" to="/projects">
          Projects 
        </Link>
  
        <Link className="nav__item--contact" to="/contact">
          Get in touch
        </Link>
      </div>
    );
  };
  
  export default Nav;