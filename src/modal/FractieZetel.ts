import {Deserializer} from '../controller/Deserializer';

export class FractieZetel extends Deserializer {
    /* Attributes */
    Id: string;
    Gewicht: number;
    Fractie_Id: string;
    ApiGewijzigdOp: Date;
    Verwijderd: boolean;
}