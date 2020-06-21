import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostsType, ProfileType} from "../types/types";
import {profileAPI} from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

const ADD_POST = 'MSN/PROFILE/ADD-POST';
const SET_USER_PROFILE = 'MSN/PROFILE/SET_USER_PROFILE'
const SET_STATUS = 'MSN/PROFILE/SET_STATUS'
const DELETE_POST = 'MSN/PROFILE/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'MSN/PROFILE/SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        {id: 1, message: 'Hola', likesCount: 12},
        {id: 2, message: 'Dr', likesCount: 15},
        {id: 3, message: 'Ward', likesCount: 22},
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: '',
};



const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 4,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType,
            };
        default:
            return state;
    }
};

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: ADD_POST, newPostText} as const),
    setUserProfile: (profile: ProfileType)=> ({type: SET_USER_PROFILE, profile} as const),
    setStatus: (status: string) => ({type: SET_STATUS, status} as const),
    deletePost: (postId: number) => ({type: DELETE_POST, postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const),
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
};
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
};
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
};
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
};
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        if (userId !== null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error('UserId can`t be null')
        }
    } else {
        dispatch(stopSubmit("edit-profile", {"contacts": {facebook: data.messages[0]}}));
        return Promise.reject(data.messages[0]);
    }
};


export default profileReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>