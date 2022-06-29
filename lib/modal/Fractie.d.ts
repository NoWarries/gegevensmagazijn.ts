import { Deserializer } from '../controller/Deserializer';
export declare class Fractie extends Deserializer {
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
    static toString(): string;
}
