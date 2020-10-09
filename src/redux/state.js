let store = {
    _state: {
        navbar: {
            bestFriends: [
                {id: 2, name: 'Екатерина Анисимова'},
                {id: 3, name: 'Егор Корнев'},
                {id: 4, name: 'Елизавета Логинова'}
            ]
        },
        profilePage: {
            posts: [
                {id: 4, message: 'Хорошо выглядишь!', likesCount: 2},
                {id: 3, message: 'Учи реакт', likesCount: 25},
                {id: 4, message: 'Привет', likesCount: 0},
                {id: 5, message: 'Пока', likesCount: 24}
            ],
            newPostText: 'Введите текст поста...'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Привет!'},
                {id: 2, message: 'Пришли домашку по вышмату, пожалуйста'},
                {id: 3, message: 'Ау'},
                {id: 4, message: 'Ты игноришь?'}
            ],
            dialogs: [
                {id: 1, name: 'Екатерина Анисимова'},
                {id: 2, name: 'Егор Корнев'},
                {id: 3, name: 'Елизавета Логинова'},
                {id: 4, name: 'Ксения Тихомирова'},
                {id: 5, name: 'Марк Фомин'},
                {id: 6, name: 'Дмитрий Побрацкий'}
            ],
            newMessageText: 'Введите сообщение...'
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

window.store = store;
export default store;