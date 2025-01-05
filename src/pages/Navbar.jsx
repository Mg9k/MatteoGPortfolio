import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar () {

    return(
        <>
            <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/">Matteo Grutta</NavLink>
            </div>
            <ul className="navbar-links">
                <li><NavLink to="/" activeclassname="active">About Me</NavLink></li>
                <li><NavLink to="/projects" activeclassname="active">Projects</NavLink></li>
                <li><NavLink to="/resume" activeclassname="active">Resume</NavLink></li>
                <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            </ul>
        </nav>
        </>
    );

}

export default Navbar