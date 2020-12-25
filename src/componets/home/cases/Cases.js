import React from 'react'
import s from "./Cases.module.css";
import {NavLink} from "react-router-dom";

const Cases = (props) => {
    return (
        <div className={s.grid}>
            {
                props.cases.map(c => <NavLink to={'/case/' + c.id} key={c.id}>
                <span className={s.disc}>
                    <img src={c.photo}/>
                    <div>{c.name}</div>
                </span>
                </NavLink>)
            }

        </div>
    )
}

export default Cases