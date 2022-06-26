import {Fractie} from './Fractie';

export class ActiviteitActor {
    /* Collection (static list of self) */
    private static ActiviteitActoren: ActiviteitActor[];

    /* Association */
    private fractie: Fractie;

    /*
     * TODO => Build and implement following associate classes
     * Activiteit
     * Comissie
     * Persoon
     */

    /* Attributes */
    Id: string;
    Activiteit_Id: string;
    ActorNaam: string;
    ActorFractie: string;
    Volgorde: number;
    Functie: string;
    Spreektijd: string;
    SidActor: string;
    Persoon_Id: string;
    Fractie_Id: string;
    Commissie_Id: string;
    ApiGewijzigdOp: Date;
    Verwijder: boolean;
}