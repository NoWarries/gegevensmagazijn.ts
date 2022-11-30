import {Deserializer} from './adapters/Deserializer';
import { Fractie } from '../modal';

export class FractieZetel extends Deserializer {
    /* Associations */
    /* 1..n */
    // FractieZetelPersoon: FractieZetelPersoon;
    // FractieZetelVacature: FractieZetelVacature;
    /* n..1 */
    Fractie: Fractie;

    /* Attributes */
    Id: string;
    Gewicht: number;
    Fractie_Id: string;
    ApiGewijzigdOp: Date;
    Verwijderd: boolean;

    /* toString */
    static toString(): string {
        return 'FractieZetel';
    }
}