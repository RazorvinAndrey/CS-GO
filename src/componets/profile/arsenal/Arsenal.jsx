import React from 'react'
import s from './Arsenal.module.css';
import {NavLink} from "react-router-dom";
import gun1 from "../../../aceses/photos/images.jpeg";

const Arsenal = (props) =>{
    return(
        <div className={s.ars}>
            My guns:
            <div className={s.grid}>

                <span >
                    <img src={gun1}/>
                </span>

                <span >
                    <img src={gun1}/>
                </span>

                <span >
                    <img src={gun1}/>
                </span>


                <span >
                    <img src={gun1}/>
                </span>

                <span >
                    <img src={gun1}/>
                </span>

            </div>
        </div>
    )
}

export default Arsenal