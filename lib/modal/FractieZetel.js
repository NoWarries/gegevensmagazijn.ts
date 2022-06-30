"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FractieZetel = void 0;
const Deserializer_1 = require("../controller/Deserializer");
class FractieZetel extends Deserializer_1.Deserializer {
    /* Associations */
    /* 1..n */
    // FractieZetelPersoon: FractieZetelPersoon;
    // FractieZetelVacature: FractieZetelVacature;
    /* n..1 */
    Fractie;
    /* Attributes */
    Id;
    Gewicht;
    Fractie_Id;
    ApiGewijzigdOp;
    Verwijderd;
    /* toString */
    static toString() {
        return 'FractieZetel';
    }
}
exports.FractieZetel = FractieZetel;
