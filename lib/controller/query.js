"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const queryService_1 = require("../service/queryService");
class Query {
    top;
    skip;
    count;
    order;
    expand;
    filter;
    select;
    custom;
    toString() {
        let output = '';
        if (this.custom !== null) {
            return this.custom;
        }
        if (this.top !== null) {
            output += `$top=${this.top}&`;
        }
        if (this.skip !== null) {
            output += `$skip=${this.skip}&`;
        }
        if (this.count !== null) {
            output += `$count=${this.count}&`;
        }
        if (this.order !== null) {
            output += `$orderby=${this.order[0]} ${this.order[1]}&`;
        }
        output += (0, queryService_1.genFilter)(this);
        output += (0, queryService_1.genSelect)(this);
        output += (0, queryService_1.genExpansion)(this);
        if (output.charAt(output.length - 1) === '&') {
            output = output.slice(0, -1);
        }
        return output;
    }
}
exports.Query = Query;
