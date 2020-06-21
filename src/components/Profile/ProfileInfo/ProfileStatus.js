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
var ProfileStatus = /** @class */ (function (_super) {
    __extends(ProfileStatus, _super);
    function ProfileStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            editMode: false,
            status: _this.props.status,
        };
        _this.activateEditMode = function () {
            _this.setState({
                editMode: true,
            });
        };
        _this.deactivateEditMode = function () {
            _this.setState({
                editMode: false,
            });
            _this.props.updateStatus(_this.state.status);
        };
        _this.onStatusChange = function (e) {
            _this.setState({
                status: e.currentTarget.value,
            });
        };
        return _this;
    }
    ProfileStatus.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    };
    ProfileStatus.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            !this.state.editMode &&
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { onDoubleClick: this.activateEditMode }, this.props.status || 'Double click on me')),
            this.state.editMode &&
                react_1.default.createElement("div", null,
                    react_1.default.createElement("input", { onChange: this.onStatusChange, autoFocus: true, onBlur: this.deactivateEditMode, value: this.state.status }))));
    };
    return ProfileStatus;
}(react_1.default.Component));
exports.default = ProfileStatus;
