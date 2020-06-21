import React, {useState} from "react";
import pi from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then( () => {
                setEditMode(false);
            })
    };

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={pi.content}>
            <div>
                <img src={profile.photos.large || userPhoto} className={pi.mainPhoto}/>
                <div>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} toEditMode={ () => {setEditMode(true)} }/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={pi.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
};

const ProfileData = ({profile, isOwner, toEditMode}) => {
return (<div>
        {isOwner && <div><button onClick={toEditMode}>edit</button> </div>}
    <div> <b>Full name</b>: {profile.fullName} </div>
    <div> <b> Looking for a job </b>: {profile.lookingForAJob ? "yes" : "no"} </div>
    {profile.lookingForAJob &&
            <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}
    <div><b>About me</b>: {profile.aboutMe}</div>
    <div> <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>})}
    </div>
    </div>
)
};



export default ProfileInfo;
