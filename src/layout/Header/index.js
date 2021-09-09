import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Header() {
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Header;
