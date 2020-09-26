import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialogsItem}>
        <img src={`img/avatars/avatar${props.id}.png`}
             width='50' height='50' />
        <NavLink to={path} className={s.active}>{props.name}</NavLink>
    </div>
}

export default DialogItem;