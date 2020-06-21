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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SEND_MESSAGE = 'SEND-MESSAGE';
var initialState = {
    dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Boris' },
        { id: 3, name: 'Anton' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Amigo' },
    ],
};
var dialogsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SEND_MESSAGE:
            var body = action.newMessageBody;
            return __assign(__assign({}, state), { messages: __spreadArrays(state.messages, [{ id: 6, message: body }]) });
        default:
            return state;
    }
};
exports.sendMessageCreator = function (newMessageBody) { return ({ type: SEND_MESSAGE, newMessageBody: newMessageBody }); };
exports.default = dialogsReducer;
