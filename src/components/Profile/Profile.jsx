import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPosts/MyPost';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

    let posts = [
        {id: 1, message: 'Хорошо выглядишь!', likesCount: 2},
        {id: 2, message: 'Учи реакт', likesCount: 25},
        {id: 3, message: 'Привет', likesCount: 0},
        {id: 4, message: 'Пока', likesCount: 24}
    ];

    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={posts} />
        </div>
    )
}

export default Profile;