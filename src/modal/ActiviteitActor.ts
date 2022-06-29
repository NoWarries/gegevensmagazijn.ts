import {Deserializer} from '../controller/Deserializer';

export class ActiviteitActor extends Deserializer {
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