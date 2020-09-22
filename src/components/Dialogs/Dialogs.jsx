import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Екатерина Анисимова'},
        {id: 2, name: 'Егор Корнев'},
        {id: 3, name: 'Елизавета Логинова'},
        {id: 4, name: 'Ксения Тихомирова'},
        {id: 5, name: 'Марк Фомин'}
    ];

    let messages = [
        {id: 1, message: 'Привет!'},
        {id: 2, message: 'Пришли домашку по вышмату, пожалуйста'},
        {id: 3, message: 'Ау'},
        {id: 4, message: 'Ты игноришь?'}
    ];

    let dialogElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = messages.map( m => <Message message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;