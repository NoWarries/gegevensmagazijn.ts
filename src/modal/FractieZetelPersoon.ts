import {Deserializer} from '../controller/Deserializer';

export class FractieZetelPersoon extends Deserializer{
    /* Attributes */
    Id: string;
    FractieZetel_Id: string;
    Functie: string;
    Van: Date;
    TotEnMet: Date;
    GewijzigdOp: Date;
    ApiGewijzigdOp: Date;
    Verwijderd: boolean;
}