import './navegacio.scss';
import React from 'react';

function Menu(){
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <header>
            <div className="menu">
              <li><a href="/">Home</a></li>
              <li><a href="aboutme.js">About</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/About">Contact</a></li>
            </div>
          </header>
        </ul>
      </nav>
    )
}
export default Menu;
