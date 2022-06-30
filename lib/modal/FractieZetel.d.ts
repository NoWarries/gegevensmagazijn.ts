import { Deserializer } from '../controller/Deserializer';
import { Fractie } from '../modal';
export declare class FractieZetel extends Deserializer {
    Fractie: Fractie;
    Id: string;
    Gewicht: number;
    Fractie_Id: string;
    ApiGewijzigdOp: Date;
    Verwijderd: boolean;
    static toString(): string;
}
