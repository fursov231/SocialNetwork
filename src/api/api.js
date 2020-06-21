"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var instance = axios_1.default.create({
    withCredentials: true,
    headers: {
        'API-KEY': '6ad120af-0bfc-436d-831b-9102d76f6c05'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});
exports.usersAPI = {
    getUsers: function (currentPage, pageSize) {
        return instance.get("users?page=" + currentPage + "&count=" + pageSize)
            .then(function (response) {
            return response.data;
        });
    },
    follow: function (userId) {
        return instance.post("follow/" + userId);
    },
    unfollow: function (userId) {
        return instance.delete("follow/" + userId);
    },
    getProfile: function (userId) {
        console.warn('Obsolete method. Please use ProfileAPI object.');
        return exports.profileAPI.getProfile(userId);
    }
};
exports.profileAPI = {
    getProfile: function (userId) {
        return instance.get("profile/" + userId);
    },
    getStatus: function (userId) {
        return instance.get("profile/status/" + userId);
    },
    updateStatus: function (status) {
        return instance.put("profile/status", { status: status });
    },
    savePhoto: function (photoFile) {
        var formData = new FormData();
        formData.append("image", photoFile);
        return instance.put("profile/photo", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile: function (profile) {
        return instance.put("profile/", profile);
    },
};
var ResultCodeEnum;
(function (ResultCodeEnum) {
    ResultCodeEnum[ResultCodeEnum["Success"] = 0] = "Success";
    ResultCodeEnum[ResultCodeEnum["Error"] = 1] = "Error";
})(ResultCodeEnum = exports.ResultCodeEnum || (exports.ResultCodeEnum = {}));
var ResultCodeEnumForCaptcha;
(function (ResultCodeEnumForCaptcha) {
    ResultCodeEnumForCaptcha[ResultCodeEnumForCaptcha["CaptchaIsRequired"] = 10] = "CaptchaIsRequired";
})(ResultCodeEnumForCaptcha = exports.ResultCodeEnumForCaptcha || (exports.ResultCodeEnumForCaptcha = {}));
exports.authAPI = {
    me: function () {
        return instance.get("auth/me").then(function (result) { return result.data; });
    },
    login: function (email, password, rememberMe, captcha) {
        if (rememberMe === void 0) { rememberMe = false; }
        if (captcha === void 0) { captcha = null; }
        return instance.post("auth/login", ({ email: email, password: password, rememberMe: rememberMe, captcha: captcha }))
            .then(function (result) { return result.data; });
    },
    logout: function () {
        return instance.delete("auth/login");
    },
};
exports.securityAPI = {
    getCaptchaUrl: function () {
        return instance.get("security/get-captcha-url");
    },
};
