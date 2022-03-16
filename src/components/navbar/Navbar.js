import React, { useState } from "react";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./navbar.css";
import Logo from "../customIcons/Logo";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [menu, setMenu] = useState(true);

  return (
    <div className='navbar'>
      <div className='logo-box'>
        <Link to='intro' className='link'>
          <h2 style={{ color: darkMode && "white", fontFamily: "" }}>
            {" "}
            <Logo className='logo' /> phemmy_dev.
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

      <div className={menu ? "submenu" : "hidden"}>
        <Link
          to='about'
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className='submenu-links'
          onClick={() => setMenu(false)}
        >
          About
        </Link>

        <Link
          to='projectList'
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className='submenu-links'
          onClick={() => setMenu(false)}
        >
          Projects
        </Link>
        <Link
          to='contact'
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className='submenu-links'
          onClick={() => setMenu(false)}
        >
          Contact
        </Link>
      </div>
      <span className='hamburger' onClick={() => setMenu(!menu)}>
        <BiMenu />
      </span>
    </div>
  );
};

export default Navbar;
