import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {

    let postsElements = props.posts.map(p =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>Посты</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Отправить</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPost;