"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../api/api");
var redux_form_1 = require("redux-form");
var ADD_POST = 'ADD-POST';
var SET_USER_PROFILE = 'SET_USER_PROFILE';
var SET_STATUS = 'SET_STATUS';
var DELETE_POST = 'DELETE_POST';
var SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
var initialState = {
    posts: [
        { id: 1, message: 'Hola', likesCount: 12 },
        { id: 2, message: 'Im fine', likesCount: 15 },
        { id: 3, message: 'Adios', likesCount: 22 },
    ],
    profile: null,
    status: '',
    newPostText: '',
};
var profileReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_POST: {
            var newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 4,
            };
            return __assign(__assign({}, state), { posts: __spreadArrays(state.posts, [newPost]), newPostText: '' });
        }
        case SET_USER_PROFILE:
            return __assign(__assign({}, state), { profile: action.profile });
        case SET_STATUS:
            return __assign(__assign({}, state), { status: action.status });
        case DELETE_POST:
            return __assign(__assign({}, state), { posts: state.posts.filter(function (p) { return p.id !== action.postId; }) });
        case SAVE_PHOTO_SUCCESS:
            return __assign(__assign({}, state), { profile: __assign(__assign({}, state.profile), { photos: action.photos }) });
        default:
            return state;
    }
};
exports.addPostActionCreator = function (newPostText) { return ({ type: ADD_POST, newPostText: newPostText }); };
exports.setUserProfile = function (profile) { return ({ type: SET_USER_PROFILE, profile: profile }); };
exports.setStatus = function (status) { return ({ type: SET_STATUS, status: status }); };
exports.deletePost = function (postId) { return ({ type: DELETE_POST, postId: postId }); };
exports.savePhotoSuccess = function (photos) { return ({ type: SAVE_PHOTO_SUCCESS, photos: photos }); };
exports.getUserProfile = function (userId) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.usersAPI.getProfile(userId)];
            case 1:
                response = _a.sent();
                dispatch(exports.setUserProfile(response.data));
                return [2 /*return*/];
        }
    });
}); }; };
exports.getStatus = function (userId) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.profileAPI.getStatus(userId)];
            case 1:
                response = _a.sent();
                dispatch(exports.setStatus(response.data));
                return [2 /*return*/];
        }
    });
}); }; };
exports.updateStatus = function (status) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.profileAPI.updateStatus(status)];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    dispatch(exports.setStatus(status));
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.savePhoto = function (file) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.profileAPI.savePhoto(file)];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    dispatch(exports.savePhotoSuccess(response.data.data.photos));
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.saveProfile = function (profile) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = getState().auth.id;
                return [4 /*yield*/, api_1.profileAPI.saveProfile(profile)];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    dispatch(exports.getUserProfile(userId));
                }
                else {
                    dispatch(redux_form_1.stopSubmit("edit-profile", { "contacts": { facebook: response.data.messages[0] } }));
                    return [2 /*return*/, Promise.reject(response.data.messages[0])];
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.default = profileReducer;
