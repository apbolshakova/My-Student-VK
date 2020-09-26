import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={`img/avatars/avatar${ props.id }.png`}
                 width='50' height='50' />
            <span className={s.messageText}>{ props.message }</span>
            <div>
                <span>Оценили: { props.likesCount }</span>
            </div>
        </div>
    )
}

export default Post;