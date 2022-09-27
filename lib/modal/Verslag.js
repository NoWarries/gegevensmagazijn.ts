"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verslag = void 0;
const Deserializer_1 = require("../controller/Deserializer");
class Verslag extends Deserializer_1.Deserializer {
    /* Associations */
    /* n..1 */
    Vergadering;
    /* Attributes */
    Id;
    Soort;
    Status;
    ContentType;
    ContentLength;
    GewijzigdOp;
    ApiGewijzigdOp;
    Verwijderd;
    Vergadering_Id;
    /* toString */
    static toString() {
        return 'Verslag';
    }
}
exports.Verslag = Verslag;
