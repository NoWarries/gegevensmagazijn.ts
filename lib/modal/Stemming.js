"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stemming = void 0;
const Deserializer_1 = require("../controller/Deserializer");
class Stemming extends Deserializer_1.Deserializer {
    /* Associations */
    /* n..1 */
    Fractie;
    // Besluit: Besluit;
    // Persoon: Persoon;
    /* Attributes */
    Id;
    Besluit_Id;
    Soort;
    FractieGrootte;
    ActorNaam;
    ActorFractie;
    Vergissing;
    SidActorLid;
    Persoon_Id;
    Fractie_Id;
    ApiGewijzigdOp;
    Verwijderd;
    /* toString */
    static toString() {
        return 'Stemming';
    }
}
exports.Stemming = Stemming;
