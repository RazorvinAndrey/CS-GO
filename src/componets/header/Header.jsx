import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import gun1 from './../../aceses/photos/images.jpeg'

function Header(props) {
    return (
        <div>
            <div className={s.heders}>
                <span className={s.logo}>
                    CS-GO без наёба
                </span>
                <div className={s.items}>
                    <span className={s.item}>
                        <NavLink to="/home" activeClassName={s.active}>Home</NavLink>
                    </span>
                    <span className={s.item}>
                        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                    </span>
                    <span className={s.item}>
                        <NavLink to="/login" activeClassName={s.active}>Registration</NavLink>
                    </span>
                </div>
            </div>
            <div className={s.roulette}>
                <span>
                    Recently dropped:
                </span>
                <img src={gun1}/>
                <img src={gun1}/>
                <img src={gun1}/>
                <img src={gun1}/>
                <img src={gun1}/>
                <img src={gun1}/>
                <img src={gun1}/>
                <img src={gun1}/>
                <img src={gun1}/>
            </div>
        </div>
    );
}

export default Header;
