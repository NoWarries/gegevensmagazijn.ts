import {Fractie} from './Fractie';
import {FractieZetelPersoon} from './FractieZetelPersoon';
import {FractieZetelVacature} from './FractieZetelVacature';

export class FractieZetel {
    /* Collection (static list of self) */
    private static fractieZetel: FractieZetel[];

    /* Association */
    private fractie: Fractie;
    private fractieZetelPersoon: FractieZetelPersoon[];
    private FractieZetelVacature: FractieZetelVacature;

    /* Attributes */
    Id: string;
    Gewicht: number;
    Fractie_Id: string;
    ApiGewijzigdOp: Date;
    Verwijderd: boolean;
}