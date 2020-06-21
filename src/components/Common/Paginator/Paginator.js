"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styles = __importStar(require("./Paginator.module.css"));
var classnames_1 = __importDefault(require("classnames"));
var Paginator = function (_a) {
    var totalItemsCount = _a.totalItemsCount, pageSize = _a.pageSize, currentPage = _a.currentPage, onPageChanged = _a.onPageChanged, _b = _a.portionSize, portionSize = _b === void 0 ? 10 : _b;
    var pagesCount = Math.ceil(totalItemsCount / pageSize);
    var pages = [];
    for (var i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    var portionCount = Math.ceil(pagesCount / portionSize);
    var _c = react_1.useState(1), portionNumber = _c[0], setPortionNumber = _c[1];
    var leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    var rightPortionPageNumber = portionNumber * portionSize;
    return (
    // @ts-ignore
    react_1.default.createElement("div", { className: styles.paginator },
        portionNumber > 1 &&
            react_1.default.createElement("button", { onClick: function () { setPortionNumber(portionNumber - 1); } }, "Prev "),
        pages.filter(function (p) { return p >= leftPortionPageNumber && p <= rightPortionPageNumber; })
            .map(function (p) {
            var _a;
            return react_1.default.createElement("span", { className: classnames_1.default((_a = {},
                    // @ts-ignore
                    _a[styles.selectedPage] = currentPage === p,
                    _a), styles.pageNumber), key: p, onClick: function (e) {
                    onPageChanged(p);
                } }, p);
        }),
        portionCount > portionNumber &&
            react_1.default.createElement("button", { onClick: function () { setPortionNumber(portionNumber + 1); } }, "Next")));
};
exports.default = Paginator;
