import {Deserializer} from '../controller/Deserializer';

export class FractieZetelVacature extends Deserializer {
    /* Attributes */
    Id: string;
    FractieZetel_Id: string;
    Functie: string;
    Van: Date;
    TotEnMet: Date;
    GewijzigdOp: Date;
    Verwijderd: boolean;
}