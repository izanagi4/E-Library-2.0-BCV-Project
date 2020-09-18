import React from 'react'
import './styles/StartPage.css';
import {NavLink} from 'react-router-dom';

function StartPage() {

    return (
        <>
            <div className="main">
                <h1>E-Library <br /> BNI Corporate University</h1>
                <p>Platform E-Library khusus para pegawai BNI46 dan para mahasiswa untuk melakukan riset pada BANK BNI...</p>
                <NavLink to="/Home"><button><strong>START NOW</strong></button></NavLink>
            </div>

        </>
    )
}

export default StartPage
