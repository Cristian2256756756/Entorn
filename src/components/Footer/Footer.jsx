import React from 'react'
import './Footer.scss'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="Logo" class="footer-logo"/>
                <p>High-end food delivery offers gourmet dishes crafted by renowned 
                    chefs using fresh, high-quality ingredients. These services provide an exceptional 
                    culinary experience at home.
                </p>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/profile.php?id=61560337293612" >
                        <img src={assets.facebook_icon} alt="" />
                    </a>
                    <a href="https://x.com/KaetroFood53161" >
                        <img src={assets.twitter_icon} alt="" />
                    </a>
                    <a href="https://es.linkedin.com/in/cristian-valentin-anghel-044560262" >
                        <img src={assets.linkedin_icon} alt="" />
                    </a>

                </div>
            </div>
            <div className="footer-content-center">
                <h2>KAETRO</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>CONTACT US</h2>
                <ul>
                    <li>+64 654 334 232</li>
                    <li>Kaetro@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 Kaetro.com - Cristian Valentin Anghel</p>
    </div>
  )
}

export default Footer