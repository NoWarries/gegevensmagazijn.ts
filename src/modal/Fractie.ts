import {Deserializer} from '../controller/Deserializer';

export class Fractie extends Deserializer {
    /* Attributes */
    Id: string;
    Nummer: number;
    Afkorting: string;
    NaamNL: string;
    NaamEN: string;
    AantalZetels: number;
    AantalStemmen: number;
    DatumActief: Date;
    DatumInactief: Date;
    ContentType: string;
    ContentLength: number;

    /* toString */
    static toString(): string {
        return 'Fractie';
    }
}