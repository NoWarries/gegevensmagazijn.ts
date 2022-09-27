import { Deserializer } from '../controller/Deserializer';
import { Verslag } from '../modal';
export declare class Vergadering extends Deserializer {
    Verslag: Verslag;
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
    static toString(): string;
}
