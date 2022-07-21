"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deserializer = void 0;
const Gegevensmagazijn_1 = require("../Gegevensmagazijn");
class Deserializer {
    static get(Identifier) {
        return Gegevensmagazijn_1.Gegevensmagazijn.self.select(this.toString(), Identifier, {
            format: 'minimal',
            expand: [
                ['*'],
            ]
        })
            .then((data) => {
            const obj = new this();
            Object.entries(data).forEach(([key, value]) => {
                if (key.toLowerCase().includes('odata')) {
                    if (key.includes('odata.associationLink')) {
                        obj[key.replace('@odata.associationLink', '')] = value;
                    }
                }
                else {
                    obj[key] = value;
                }
            });
            return obj;
        });
    }
}
exports.Deserializer = Deserializer;
