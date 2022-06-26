import {FractieZetel} from './FractieZetel';
import {ActiviteitActor} from './ActiviteitActor';

export class Fractie {
    /* Collection (static list of self) */
    private static fractie: Fractie[];

    /* Association */
    private fractieZetel: FractieZetel[];
    private activiteitActor: ActiviteitActor[];

    /*
     * TODO => Build and implement following associate classes
     * ZaakActor
     * FractieAanvullendGegeven
     * DocumentActor
     * ComissieZetelVervangerVacature
     * ComissieZetelVastVacature
     */

    /* Attributes */
    Id: string;
    Nummer: number;
    Afkorting: string;
    NaamNL: string;
    NaamEN: string;
    AantalZetels: number;
    AantalStemmen: number;
    DatumActief: Date;
    DatumInactief: Date;
    ContentType: string;
    ContentLenth: number;
}