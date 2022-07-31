import {Deserializer} from '../controller/Deserializer';
import { Fractie } from '../modal';

export class Stemming extends Deserializer {
    /* Associations */
    /* n..1 */
    Fractie: Fractie;
    // Besluit: Besluit;
    // Persoon: Persoon;

    /* Attributes */
    Id: string;
    Besluit_Id: string;
    Soort: string;
    FractieGrootte: number;
    ActorNaam: string;
    ActorFractie: string;
    Vergissing: boolean;
    SidActorLid: string;
    Persoon_Id: string;
    Fractie_Id: string;
    ApiGewijzigdOp: Date;
    Verwijderd: boolean;

    /* toString */
    static toString(): string {
        return 'Stemming';
    }
}