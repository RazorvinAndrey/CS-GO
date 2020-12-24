import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import gun1 from './../../aceses/photos/images.jpeg'
import gun2 from './../../aceses/photos/5bc296998b0d1006d775e806017ed66b.png'
import gun3 from './../../aceses/photos/Deagle.png'
import gun4 from './../../aceses/photos/p1_2263537_28ebbe4d.png'
import gun5 from './../../aceses/photos/photo_2019-08-07_01-06-25.jpg'

function Header(props) {
    return (
        <div>
            <div className={s.heders}>
                <div className={s.items}>
                <span className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </span>
                    <span className={s.item}>
                    <NavLink to="/home" activeClassName={s.active}>Home</NavLink>
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
