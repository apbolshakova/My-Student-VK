import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Хорошо выглядишь!' likesCount='0'/>
                <Post message="Учи реакт" likesCount='23'/>
            </div>
        </div>
    )
}

export default MyPost;