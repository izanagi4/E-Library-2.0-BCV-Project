import React from 'react';
import './styles/Footer.css';
import { NavLink } from 'react-router-dom';
import loc from './images/icon-location.svg';
import mail from './images/icon-email.svg';
import phone from './images/icon-phone.svg';

function Footer() {
    return (
        <div>
        <footer>
        <h1><strong>BCV</strong></h1>
        <div className="information">
          <ul>
            <li>
                <img src={loc} alt=""/>
              BCV Gedung BNI Kota - Jalan Lada No.1 Jakarta Kota
            </li>
            <li>
            <img src={phone} alt=""/>
              +12 3456789
            </li>
            <li>
            <img src={mail} alt=""/>
              bcv@gmail.com
            </li>
          </ul>
        </div>
        <div className="about">
          <ul>
            <li><NavLink to="/#" style={{ textDecoration:'none' }}>
              Contact us</NavLink>
            </li>
            <li><NavLink to="/#" style={{ textDecoration:'none' }}>
              Terms</NavLink>
            </li>
            <li>
            <NavLink to="/#" style={{ textDecoration:'none' }}>
              Privacy</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="social-media">
            <li><NavLink className="circle"  to="/#"><i className="fab fa-facebook-f"></i></NavLink></li>
            <li><NavLink className="circle" to="/#"><i className="fab fa-twitter"></i></NavLink></li>
            <li><NavLink className="circle" to="/#"><i className="fab fa-instagram"></i></NavLink></li>
          </ul>
        </div>
      </footer>
        </div>
    )
}

export default Footer
