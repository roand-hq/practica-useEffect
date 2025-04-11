import React from 'react';
import { Link } from 'react-router'; 
import './CSS/style.css'; 

const Nav = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Práctica de consumo de APIs y useEffect</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/dragon-ball">Dragon Ball</Link>
        </li>
        <li>
          <Link to="/morty">Morty</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
