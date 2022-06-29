"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deserializer = void 0;
const Gegevensmagazijn_1 = require("../Gegevensmagazijn");
class Deserializer {
    constructor() {
        // empty constructor
    }
    static get(Identifier) {
        return Gegevensmagazijn_1.Gegevensmagazijn.self.select(this.toString(), Identifier, {
            format: 'none'
        })
            .then((data) => {
            const obj = new this();
            Object.entries(data).forEach(([key, value]) => {
                obj[key] = value;
            });
            return obj;
        });
    }
}
exports.Deserializer = Deserializer;
