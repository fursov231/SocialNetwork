"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Paginator_1 = __importDefault(require("../Common/Paginator/Paginator"));
var User_1 = __importDefault(require("./User"));
var Users = function (_a) {
    var currentPage = _a.currentPage, totalUsersCount = _a.totalUsersCount, pageSize = _a.pageSize, onPageChanged = _a.onPageChanged, users = _a.users, props = __rest(_a, ["currentPage", "totalUsersCount", "pageSize", "onPageChanged", "users"]);
    return react_1.default.createElement("div", null,
        react_1.default.createElement(Paginator_1.default, { currentPage: currentPage, onPageChanged: onPageChanged, totalItemsCount: totalUsersCount, pageSize: pageSize }),
        react_1.default.createElement("div", null, users.map(function (u) { return react_1.default.createElement(User_1.default, { key: u.id, followingInProgress: props.followingInProgress, follow: props.follow, unfollow: props.unfollow, user: u }); })));
};
exports.default = Users;
