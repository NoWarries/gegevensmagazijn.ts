import { Provider } from './provider';
import { Query } from './query';
export declare class Gegevensmagazijn {
    static self: Gegevensmagazijn;
    private _provider;
    constructor(provider: Provider);
    /**
     * Given a request source and optionaly a set of settings, return the correct data from the OData API
     * @param {string} request the source you wish to request e.g. ["Fractie", "Stemming"]
     * @param {Query} settings configurations
     */
    selectAll(request: string, settings?: Query): Promise<unknown>;
    select(request: string, identifier: string, settings?: Query): Promise<unknown>;
    get provider(): Provider;
    set provider(provider: Provider);
}
