"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serializable = void 0;
class Serializable {
    _props;
    constructor(props) {
        this._props = props;
    }
    static get(identifier) {
        return new this(identifier);
    }
}
exports.Serializable = Serializable;
