import React from 'react';
import './styles/login.css';
import { NavLink } from 'react-router-dom';
import img_login from './images/login.svg';

function Login() {
    return (
        <>
        <main>
        <div className="form-box">
            <h1>Welcome! It's nice to see you again!</h1>
            <div className="top-btn" id="btn">
                <button className="toggle-btn" id="left" onclick="login()">Login</button>
                <button className="toggle-btn" id="right" onclick="register()">Register</button>
            </div>

            <div className="input-group">
                <img src={img_login} alt=""/>
                <form  id="login-form">
                    <input type="text" className="username" placeholder="Username" /> 
                    <input type="password" className="password" placeholder="Password" />
                        <div className="ig-bot-section">
                            <button type="submit" className="login">Login</button>
                            <span><NavLink to="/#">Forgot password?</NavLink></span>
                        </div>
                </form>
                <form  id="register-form">
                    <input type="email" className="username" placeholder="Email" /> 
                    <input type="text" className="username" placeholder="Username" />
                    <input type="password" className="password" placeholder="Password" />
                        <div className="ig-bot-section">
                            <button type="submit" className="login" >Register</button>
                        </div>
                </form>
            </div>
            
            <div className="social-icon">
                <ul className="social-media">
                    <li><NavLink className="circle"  to="/#"><i className="fab fa-facebook-f"></i></NavLink></li>
                    <li><NavLink className="circle" to="/#"><i className="fab fa-twitter"></i></NavLink></li>
                    <li><NavLink className="circle" to="/#"><i className="fab fa-instagram"></i></NavLink></li>
                </ul>
            </div>
        </div>
    </main>
        </>
    )
}

export default Login
