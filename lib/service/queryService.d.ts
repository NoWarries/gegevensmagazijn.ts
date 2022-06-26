import { Query } from '../controller/query';
declare function processSettings(settings: Query): Query;
declare function genFilter(thisQuery: Query): string;
declare function genSelect(thisQuery: Query): string;
declare function genExpansion(thisQuery: Query): string;
export { processSettings, genFilter, genSelect, genExpansion };
