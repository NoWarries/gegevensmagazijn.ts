import {Deserializer} from '../controller/Deserializer';
import { Vergadering } from '../modal';

export class Verslag extends Deserializer {
    /* Associations */
    /* n..1 */
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
}