import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = {
    posts: [
        {id: 1, message: 'Хорошо выглядишь!', likesCount: 2},
        {id: 2, message: 'Учи реакт', likesCount: 25},
        {id: 3, message: 'Привет', likesCount: 0},
        {id: 4, message: 'Пока', likesCount: 24}
    ],
    dialogs: [
        {id: 1, name: 'Екатерина Анисимова'},
        {id: 2, name: 'Егор Корнев'},
        {id: 3, name: 'Елизавета Логинова'},
        {id: 4, name: 'Ксения Тихомирова'},
        {id: 5, name: 'Марк Фомин'}
    ],
    messages: [
        {id: 1, message: 'Привет!'},
        {id: 2, message: 'Пришли домашку по вышмату, пожалуйста'},
        {id: 3, message: 'Ау'},
        {id: 4, message: 'Ты игноришь?'}
    ]
};

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
