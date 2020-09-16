import React from 'react'
import './styles/Home.css';
import {NavLink} from 'react-router-dom';

function Home() {
    return (
        <>
                <div className="navbar">
                    <NavLink to="/" style={{ textDecoration:'none' }}><h1><strong>BCV</strong></h1></NavLink>
                    <ul>
                    <li><NavLink to="/" style={{ textDecoration:'none' }}>Home</NavLink></li>
                    <li><NavLink to="/Catalogue" style={{ textDecoration:'none' }}>Catalogue</NavLink></li>
                    <li><NavLink to="/About" style={{ textDecoration:'none' }}>About us</NavLink></li>
                    <li><NavLink to="/Riset" style={{ textDecoration:'none' }}>Riset</NavLink></li>
                    <li><NavLink to="/Faq" style={{ textDecoration:'none' }}>FAQ</NavLink></li>
                    <li><NavLink to="/Login" style={{ textDecoration:'none' }}>Log in</NavLink></li>
                    </ul>
                </div>

                <div className="main">
                    <h1>E-Library <br /> BNI Corporate University</h1>
                
                    <p>Platform E-Library Khusus para pegawai BNI46 dan para Mahasiswa untuk melakukan riset pada BANK BNI...</p>
                    <button><strong>START NOW</strong></button>
                </div>
        </>
    )
}

export default Home
