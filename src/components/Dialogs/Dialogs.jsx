import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Екатерина Анисимова" id="1" />
                <DialogItem name="Илья Васильев" id="2" />
                <DialogItem name="Егор Корнев" id="3" />
                <DialogItem name="Елизавета Логинова" id="4" />
                <DialogItem name="Ксения Тихомирова" id="5" />
                <DialogItem name="Марк Фомин" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Привет!" />
                <Message message="Пришли домашку по вышмату, пожалуйста" />
                <Message message="Ау" />
                <Message message="Ты игноришь?" />
            </div>
        </div>
    )
}

export default Dialogs;