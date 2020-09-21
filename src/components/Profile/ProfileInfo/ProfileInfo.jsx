import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.photo} src='img/photo.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <p>Это мой профиль.</p>
            </div>
        </div>
    )
}

export default ProfileInfo;