import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavLinks.css';


const NavLinks = props => {
    return <ul className = "nav-links">
        <NavLink to = "/" exact>
            ALL USERS
        </NavLink>
        <NavLink to = "/u1/places">
            My PLACES
        </NavLink>
        <NavLink to = "/places/new">
            Add Place
        </NavLink>
        <NavLink to = "/auth">
            Authenticate
        </NavLink>
    </ul>
};

export default NavLinks;