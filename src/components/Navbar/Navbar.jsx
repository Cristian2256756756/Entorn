import React, { useState } from 'react'
import './Navbar.scss'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const[menu, setMenu] = useState("Home");                       /*Para poder poner una linea debajo de la opcion que estemos del menu*/

    return(
        <div className='navbar'> 
          <img src={assets.logo} alt="" className="logo" />
          <ul className="navbar-menu">
            <Link to='/' on onClick ={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#Explore-menu' on onClick ={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' on onClick ={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' on onClick ={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact-us</a>
            <li on onClick ={()=>setMenu("About")} className={menu==="About"?"active":""}><a href="/About">About</a></li>
          </ul>

          <div className="navbar-right">
            <img src={assets.search_icon} alt=""/>
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt=""/>
                <div className="dot"></div>
            </div>
            <button>Sign in</button>
          </div>
        </div>
    )
}

export default Navbar