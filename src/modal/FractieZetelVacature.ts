import {FractieZetel} from './FractieZetel';

export class FractieZetelVacature {
    /* Collection (static list of self) */
    private static FractieZetelVacature: FractieZetelVacature[];

    /* Association */
    private fractieZetel: FractieZetel;

    /* Attributes */
    Id: string;
    FractieZetel_Id: string;
    Functie: string;
    Van: Date;
    TotEnMet: Date;
    GewijzigdOp: Date;
    Verwijderd: boolean;
}