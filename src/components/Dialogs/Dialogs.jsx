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

    let dialogsData = [
        {id: 1, name: 'Екатерина Анисимова'},
        {id: 2, name: 'Егор Корнев'},
        {id: 3, name: 'Елизавета Логинова'},
        {id: 4, name: 'Ксения Тихомирова'},
        {id: 5, name: 'Марк Фомин'}
    ];

    let messagesData = [
        {id: 1, message: 'Привет!'},
        {id: 2, message: 'Пришли домашку по вышмату, пожалуйста'},
        {id: 3, message: 'Ау'},
        {id: 4, message: 'Ты игноришь?'}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name="" id="3" />
                <DialogItem name="" id="4" />
                <DialogItem name="" id="5" />
                <DialogItem name="" id="6" />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    )
}

export default Dialogs;