let state = {
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
        ]
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
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
}

export default state;