import { Deserializer } from '../controller/Deserializer';
import { FractieZetel } from '../modal';
export declare class Fractie extends Deserializer {
    FractieZetel: FractieZetel;
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
