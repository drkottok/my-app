import React from 'react';
import kottok from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";

const Profile = () => {
    return <div className={kottok.profile}>
        <div> <MyPosts /></div>
    </div>
      }


export default Profile;