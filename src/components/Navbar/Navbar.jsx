import React from "react";
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={n.nav}>
        <ul>
            <li><NavLink to='/profile' activeClassName={n.active}>Profile</NavLink></li>
            <li><NavLink to='/dialogs' activeClassName={n.active}>Messages</NavLink></li>
            <li><NavLink to='/news' activeClassName={n.active}>News</NavLink></li>
            <li><NavLink to='/settings' activeClassName={n.active}>Settings</NavLink></li>
            <li><NavLink to='/users' activeClassName={n.active}>Users</NavLink></li>
        </ul>
    </nav>
};

export default Navbar;