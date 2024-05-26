import React, { useState } from 'react'
import './Navbar.scss'
import {assets} from '../../assets/assets'

const Navbar = () => {

  const[menu, setMenu] = useState("Home");                       /*Para poder poner una linea debajo de la opcion que estemos del menu*/

    return(
        <div className='navbar'> 
          <img src={assets.logo} alt="" className="logo" />
          <ul className="navbar-menu">
            <li on onClick ={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
            <li on onClick ={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
            <li on onClick ={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</li>
            <li on onClick ={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact-us</li>
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