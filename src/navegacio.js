import './navegacio.css';
import React from 'react';
import AboutmeCristian from './aboutme';
import {Link} from 'react-router-dom';

function Menu(){
    return(

<body>
  <nav class="navbar">
    <ul class="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      
      <div class="menu">
        <li><a href="/">Home</a></li>
        <li><a href="aboutme.js">About</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Contact</a></li>

      </div>
    </ul>
  </nav>
</body>
    )
}
export default Menu;