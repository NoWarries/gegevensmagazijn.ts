"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deserializer = void 0;
const lib_1 = require("../lib");
class Deserializer {
    constructor() {
    }
    static get(Identifier) {
        lib_1.gegevensmagazijn.select(this.toString(), Identifier)
            .then((data) => {
            const obj = new this();
            Object.entries(data).forEach(([key, value]) => {
                obj[key] = value;
            });
            console.log(obj);
        });
    }
}
exports.Deserializer = Deserializer;
