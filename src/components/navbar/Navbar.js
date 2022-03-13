import React from "react";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./navbar.css";
import Logo from "../customIcons/Logo";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='navbar'>
      <div className='logo-box'>
        <Link to='intro'>
          <h2 style={{ color: darkMode && "white", fontFamily: "" }}>
            {" "}
            <Logo />
            phemmy_dev.
          </h2>
        </Link>
      </div>

      <nav className='navbar-nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link
              to='about'
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='projectList'
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
