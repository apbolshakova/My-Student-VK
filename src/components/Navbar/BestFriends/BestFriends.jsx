import React from 'react';
import s from './BestFriends.module.css';
import FriendItem from './FriendItem/FriendItem';

const BestFriends = (props) => {

    let friendsElements = props.friends.map(
        f => <FriendItem name={f.name} id={f.id} /> );

    return (
        <div className={s.container}>
            <span>Лучшие друзья</span>
            {friendsElements}
        </div>
    )
}

export default BestFriends;