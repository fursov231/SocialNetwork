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
var object_helpers_1 = require("../components/utils/validators/object-helpers");
var FOLLOW = 'FOLLOW';
var UNFOLLOW = 'UNFOLLOW';
var SET_USERS = 'SET_USERS';
var SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
var SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
var TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
var TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
var initialState = {
    users: [],
    newPostText: 'Go',
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};
var usersReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case FOLLOW:
            return __assign(__assign({}, state), { users: object_helpers_1.updateObjectInArray(state.users, action.userId, 'id', { followed: true }) });
        case UNFOLLOW:
            return __assign(__assign({}, state), { users: object_helpers_1.updateObjectInArray(state.users, action.userId, 'id', { followed: false }) });
        case SET_USERS:
            return __assign(__assign({}, state), { users: action.users });
        case SET_CURRENT_PAGE:
            return __assign(__assign({}, state), { currentPage: action.currentPage });
        case SET_TOTAL_USERS_COUNT:
            return __assign(__assign({}, state), { totalUsersCount: action.count });
        case TOGGLE_IS_FETCHING:
            return __assign(__assign({}, state), { isFetching: action.isFetching });
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return __assign(__assign({}, state), { followingInProgress: action.isFetching
                    ? __spreadArrays(state.followingInProgress, [action.userId]) : state.followingInProgress.filter(function (id) { return id !== action.userId; }) });
        }
        default:
            return state;
    }
};
exports.followSuccess = function (userId) { return ({ type: FOLLOW, userId: userId }); };
exports.unfollowSuccess = function (userId) { return ({ type: UNFOLLOW, userId: userId }); };
exports.setUsers = function (users) { return ({ type: SET_USERS, users: users }); };
exports.setCurrentPage = function (currentPage) { return ({ type: SET_CURRENT_PAGE, currentPage: currentPage }); };
exports.setTotalUsersCount = function (totalUsersCount) { return ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }); };
exports.toggleIsFetching = function (isFetching) { return ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching }); };
exports.toggleFollowingProgress = function (isFetching, userId) { return ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId }); };
exports.requestUsers = function (page, pageSize) {
    return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch(exports.setCurrentPage(page));
                    dispatch(exports.toggleIsFetching(true));
                    return [4 /*yield*/, api_1.usersAPI.getUsers(page, pageSize)];
                case 1:
                    data = _a.sent();
                    dispatch(exports.toggleIsFetching(false));
                    dispatch(exports.setUsers(data.items));
                    dispatch(exports.setTotalUsersCount(data.totalCount));
                    return [2 /*return*/];
            }
        });
    }); };
};
var _followUnfollowFlow = function (dispatch, userId, apiMethod, actionCreator) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch(exports.toggleFollowingProgress(true, userId));
                return [4 /*yield*/, apiMethod(userId)];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    dispatch(actionCreator(userId));
                }
                dispatch(exports.toggleFollowingProgress(false, userId));
                return [2 /*return*/];
        }
    });
}); };
exports.follow = function (userId) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _followUnfollowFlow(dispatch, userId, api_1.usersAPI.follow.bind(api_1.usersAPI), exports.followSuccess);
            return [2 /*return*/];
        });
    }); };
};
exports.unfollow = function (userId) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _followUnfollowFlow(dispatch, userId, api_1.usersAPI.unfollow.bind(api_1.usersAPI), exports.unfollowSuccess);
            return [2 /*return*/];
        });
    }); };
};
exports.default = usersReducer;
