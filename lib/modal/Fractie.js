"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fractie = void 0;
const Deserializer_1 = require("../controller/Deserializer");
class Fractie extends Deserializer_1.Deserializer {
    /* Associations */
    /* 1..n */
    // ZaakActor: ZaakActor;
    FractieZetel;
    Stemming;
    // FractieAanvullendGegeven: FractieAanvullendGegeven;
    // DocumentActor: DocumentActor;
    // CommissieZetelVervangerVacature: CommissieZetelVervangerVacature;
    // CommissieZetelVastVacature: CommissieZetelVastVacature;
    // ActiviteitActor: ActiviteitActor;
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
