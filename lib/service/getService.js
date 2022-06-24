"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectAll = void 0;
const gegevensmagazijn_1 = require("../model/gegevensmagazijn");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const queryService_1 = require("./queryService");
function selectAll(request, settings) {
    const queryString = (0, queryService_1.processSettings)(settings).toString();
    const thisRequestURL = `${gegevensmagazijn_1.Gegevensmagazijn.self.provider.url}${request}?${queryString}`;
    console.log(thisRequestURL);
    return (0, cross_fetch_1.default)(`//${thisRequestURL}`).then((res) => {
        if (res.status === 400) {
            res.json().then((err => { throw new Error(err.error.message); }));
        }
        else if (!res.ok) {
            throw new Error(`Other error occurred with code : ${res.status}`);
        }
        return res.json();
    });
}
exports.selectAll = selectAll;
