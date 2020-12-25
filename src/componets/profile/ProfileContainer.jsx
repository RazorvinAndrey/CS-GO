import React from 'react'
import ProfileInfo from "./info/ProfileInfo";
import Arsenal from "./arsenal/Arsenal";
import s from './ProfileContainer.module.css'

const ProfileContainer = (props) =>{
    return(
        <div className={s.profile}>
            <ProfileInfo/>
            <Arsenal/>
        </div>
    )
}

export default ProfileContainer