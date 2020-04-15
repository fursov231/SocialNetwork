import React from "react";
import pi from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile,status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={pi.content}>
        <div>
            <img src='#'/>
        </div>
        <div>
            <img src={profile.photos.large}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
    )
};
export default ProfileInfo;