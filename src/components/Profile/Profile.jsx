import React from "react";
import Post from "./My posts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import p from './Profile.module.css'
import MyPostsContainer from "./My posts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={p.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
        <Post/>
        </div>
    )
};
export default Profile;