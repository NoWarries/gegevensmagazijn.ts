"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vergadering = void 0;
const Deserializer_1 = require("../controller/Deserializer");
class Vergadering extends Deserializer_1.Deserializer {
    /* Associations */
    /* 1..n */
    Verslag;
    /* Attributes */
    Id;
    Soort;
    Titel;
    Zaal;
    Vergaderjaar;
    VergaderingNummer;
    Datum;
    Aanvangstijd;
    Sluiting;
    Kamer;
    GewijzigdOp;
    ApiGewijzigdOp;
    Verwijderd;
    /* toString */
    static toString() {
        return 'Vergadering';
    }
}
exports.Vergadering = Vergadering;
