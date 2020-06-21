import {InferActionsTypes} from "./redux-store";

const SEND_MESSAGE = 'MSN/DIALOGS/SEND-MESSAGE';


let initialState = {
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Boris'},
        {id: 3, name: 'Anton'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Amigo'},
    ] as Array<MessagesType>,
};

export const actions = {
    sendMessage: (newMessageBody: string)=> ({
        type: SEND_MESSAGE,
        newMessageBody
    } as const),
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
};



export default dialogsReducer;

export type InitialStateType = typeof initialState;
type DialogsType = {
    id: number,
    name: string,
}
type MessagesType = {
    id: number,
    message: string,
}
type ActionsType = InferActionsTypes<typeof actions>