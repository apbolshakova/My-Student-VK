import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='img/avatar.png' />
            <span className={s.messageText}>{ props.message }</span>
            <div>
                <span>Оценили: { props.likesCount }</span>
            </div>
        </div>
    )
}

export default Post;