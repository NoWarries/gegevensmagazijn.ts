import {Deserializer} from './adapters/Deserializer';
import { Verslag } from '../modal';

export class Vergadering extends Deserializer {
    /* Associations */
    /* 1..n */
    Verslag: Verslag;

    /* Attributes */
    Id: string;
    Soort: string;
    Titel: string;
    Zaal: string;
    Vergaderjaar: string;
    VergaderingNummer: number;
    Datum: string;
    Aanvangstijd: string;
    Sluiting: string;
    Kamer: string;
    GewijzigdOp: string;
    ApiGewijzigdOp: string;
    Verwijderd: boolean;

    /* toString */
    static toString(): string {
        return 'Vergadering';
    }
}