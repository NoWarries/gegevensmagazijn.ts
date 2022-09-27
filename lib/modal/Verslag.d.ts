import { Deserializer } from '../controller/Deserializer';
import { Vergadering } from '../modal';
export declare class Verslag extends Deserializer {
    Vergadering: Vergadering;
    Id: string;
    Soort: string;
    Status: string;
    ContentType: string;
    ContentLength: number;
    GewijzigdOp: string;
    ApiGewijzigdOp: string;
    Verwijderd: boolean;
    Vergadering_Id: string;
    static toString(): string;
}
