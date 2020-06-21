import profileReducer, {actions} from "./profileReducer";


let state = {
    posts: [
        {id: 1, message: 'Hola', likesCount: 12},
        {id: 2, message: 'Im fine', likesCount: 15},
        {id: 3, message: 'Adios', likesCount: 22},
    ],
    profile: null ,
    status: '',
    newPostText: '',
};

it('length of posts should be incremented', () => {
    //1. test data
    let action = actions.addPostActionCreator('transport.mos.ru');
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts.length).toBe(4);
})

it('length of posts shouldn`t be incremented if ID is incorrect', () => {
    //1. test data
    let action = actions.deletePost(2);
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts.length).toBe(2);
});


