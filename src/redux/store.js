import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hola', likesCount: 12},
                {id: 2, message: 'Im fine', likesCount: 15},
                {id: 3, message: 'Adios', likesCount: 22},
            ],
        },
        dialogsPage: {
            dialogs: [

                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Boris'},
                {id: 3, name: 'Anton'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Amigo'},
            ],
            newMessageBody: "",
        },

        newPostText: 'tyffa',
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;


export default store;