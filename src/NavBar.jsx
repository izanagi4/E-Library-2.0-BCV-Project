import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';

function NavBar() {
    return (
    <div>
        <div className="NavBar" id="navbar">
            <nav className="navbar navbar-light">
                <NavLink to="/" style={{ textDecoration:'none' }}><h1><strong>BCV</strong></h1></NavLink>
                <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            <ul>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/#">Catalogue</NavLink></li>
                <li><NavLink to="/#">About us</NavLink></li>
                <li><NavLink to="/#">Riset</NavLink></li>
                <li><NavLink to="/#">FAQ</NavLink></li>
                <li><NavLink to="/#">Log in</NavLink></li>
            </ul>
        </div>
    </div>
    )
}

export default NavBar
