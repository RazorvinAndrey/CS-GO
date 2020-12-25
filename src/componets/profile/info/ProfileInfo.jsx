import React from 'react'
import profile from './../../../aceses/photos/counter_strike.jpg'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) =>{
    return(
        <div className={s.grid}>
            <div className={s.photo}>
                <img src={profile}/>
            </div>
            <div className={s.disc}>
                <b>Full name</b>: User <br/><br/>
                <b>Email</b>: User email <br/><br/>
                <b>Open Cases</b>: Count <br/><br/>
                <b>Money</b>: Balance <br/><br/>
            </div>
        </div>
    )
}

export default ProfileInfo