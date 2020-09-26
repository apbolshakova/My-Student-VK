import React from 'react';
import s from './FriendItem.module.css';

const FriendItem = (props) => {

    return (
        <div>
            <img src={`img/avatars/avatar${props.id}.png`}
                 width='50' height='50' />
            <span >{ props.name }</span>
        </div>
    )
}

export default FriendItem;