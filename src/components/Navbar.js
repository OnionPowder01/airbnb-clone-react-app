import React from "react";
import myImage from '../images/Airbnb_Logo_Bélo.svg.png'


export default function Navbar() {
    return (
        <nav className="navbar-container">
            <img src={myImage} alt="airbnb-logo" className="logo"/>

        </nav>
    )
}