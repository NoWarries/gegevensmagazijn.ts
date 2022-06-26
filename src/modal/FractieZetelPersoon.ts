import {Fractie} from './Fractie';
import {FractieZetel} from './FractieZetel';


export class FractieZetelPersoon {
    /* Collection (static list of self) */
    private static FractieZetelPersoon: FractieZetelPersoon[];

    /* Association */
    private fractie: Fractie;
    private fractieZetel: FractieZetel;

    /*
     * TODO => Build and implement following associate classes
     * Persoon
     */

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