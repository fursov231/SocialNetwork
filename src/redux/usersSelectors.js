"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = require("reselect");
var getUsersSelector = function (state) {
    return state.usersPage.users;
};
exports.getUsers = reselect_1.createSelector(getUsersSelector, function (users) {
    return users.filter(function (u) { return true; });
});
exports.getPageSize = function (state) {
    return state.usersPage.pageSize;
};
exports.getTotalUsersCount = function (state) {
    return state.usersPage.totalUsersCount;
};
exports.getCurrentPage = function (state) {
    return state.usersPage.currentPage;
};
exports.getIsFetching = function (state) {
    return state.usersPage.isFetching;
};
exports.getFollowingInProgress = function (state) {
    return state.usersPage.followingInProgress;
};
