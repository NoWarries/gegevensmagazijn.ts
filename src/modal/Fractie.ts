import {Deserializer} from '../controller/Deserializer';
import { FractieZetel } from '../modal';

export class Fractie extends Deserializer {
    /* Associations */
        /* 1..1 */
    // Stemming: Stemming;
        /* 1..n */
    // ZaakActor: ZaakActor;
    FractieZetel: FractieZetel;
    // FractieAanvullendGegeven: FractieAanvullendGegeven;
    // DocumentActor: DocumentActor;
    // CommissieZetelVervangerVacature: CommissieZetelVervangerVacature;
    // CommissieZetelVastVacature: CommissieZetelVastVacature;
    // ActiviteitActor: ActiviteitActor;

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
    ContentLength: number;

    /* toString */
    static toString(): string {
        return 'Fractie';
    }
}