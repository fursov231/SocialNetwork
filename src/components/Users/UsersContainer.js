"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var usersReducer_1 = require("../../redux/usersReducer");
var react_redux_1 = require("react-redux");
var Users_1 = __importDefault(require("./Users"));
var Preloader_1 = __importDefault(require("../Common/Preloader/Preloader"));
var redux_1 = require("redux");
var usersSelectors_1 = require("../../redux/usersSelectors");
var UsersContainer = /** @class */ (function (_super) {
    __extends(UsersContainer, _super);
    function UsersContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onPageChanged = function (pageNumber) {
            var pageSize = _this.props.pageSize;
            _this.props.getUsers(pageNumber, pageSize);
        };
        return _this;
    }
    UsersContainer.prototype.componentDidMount = function () {
        var _a = this.props, currentPage = _a.currentPage, pageSize = _a.pageSize;
        this.props.getUsers(currentPage, pageSize);
    };
    ;
    UsersContainer.prototype.render = function () {
        return react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("h2", null, this.props.pageTitle),
            this.props.isFetching ? react_1.default.createElement(Preloader_1.default, null) : null,
            react_1.default.createElement(Users_1.default, { onPageChanged: this.onPageChanged, totalUsersCount: this.props.totalUsersCount, pageSize: this.props.pageSize, currentPage: this.props.currentPage, follow: this.props.follow, unfollow: this.props.unfollow, users: this.props.users, followingInProgress: this.props.followingInProgress }));
    };
    return UsersContainer;
}(react_1.default.Component));
var mapStateToProps = function (state) {
    return {
        users: usersSelectors_1.getUsers(state),
        pageSize: usersSelectors_1.getPageSize(state),
        totalUsersCount: usersSelectors_1.getTotalUsersCount(state),
        currentPage: usersSelectors_1.getCurrentPage(state),
        isFetching: usersSelectors_1.getIsFetching(state),
        followingInProgress: usersSelectors_1.getFollowingInProgress(state),
    };
};
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, { follow: usersReducer_1.follow, unfollow: usersReducer_1.unfollow, getUsers: usersReducer_1.requestUsers }))(UsersContainer);
