"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var profileReducer_1 = __importDefault(require("./profileReducer"));
var dialogsReducer_1 = __importDefault(require("./dialogsReducer"));
var usersReducer_1 = __importDefault(require("./usersReducer"));
var authReducer_1 = __importDefault(require("./authReducer"));
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var redux_form_1 = require("redux-form");
var appReducer_1 = __importDefault(require("./appReducer"));
var rootReducer = redux_1.combineReducers({
    profilePage: profileReducer_1.default,
    dialogsPage: dialogsReducer_1.default,
    usersPage: usersReducer_1.default,
    auth: authReducer_1.default,
    form: redux_form_1.reducer,
    app: appReducer_1.default,
});
// @ts-ignore
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
var store = redux_1.createStore(rootReducer, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1.default)));
// @ts-ignore
window._store_ = store;
exports.default = store;
