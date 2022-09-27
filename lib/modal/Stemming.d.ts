import { Deserializer } from '../controller/Deserializer';
import { Fractie } from '../modal';
export declare class Stemming extends Deserializer {
    Fractie: Fractie;
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
    static toString(): string;
}
