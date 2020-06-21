import React from "react";
import h from './header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={h.header}>
        <img src="https://board-stickers.ru/69201-small_default/logotip-new-jersey-devils-nu-djersi-devilz.jpg"/>

        <div className={h.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={`/login`}> Login </NavLink>}
        </div>
    </header>

}

export default Header;