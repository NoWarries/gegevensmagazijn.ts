"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fractie = void 0;
const Deserializer_1 = require("../controller/Deserializer");
class Fractie extends Deserializer_1.Deserializer {
    /* Attributes */
    Id;
    Nummer;
    Afkorting;
    NaamNL;
    NaamEN;
    AantalZetels;
    AantalStemmen;
    DatumActief;
    DatumInactief;
    ContentType;
    ContentLength;
    /* toString */
    static toString() {
        return 'Fractie';
    }
}
exports.Fractie = Fractie;
