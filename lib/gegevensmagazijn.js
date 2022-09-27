"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gegevensmagazijn = void 0;
const cross_fetch_1 = require("cross-fetch");
const queryService_1 = require("./service/queryService");
class Gegevensmagazijn {
    static self;
    _provider;
    constructor(provider) {
        this._provider = provider;
        Gegevensmagazijn.self = this;
    }
    /**
     * Given a request source and optionaly a set of settings, return the correct data from the OData API
     * @param {string} request the source you wish to request e.g. ["Fractie", "Stemming"]
     * @param {Query} settings configurations
     */
    selectAll(request, settings) {
        const queryString = (0, queryService_1.processSettings)(settings).toString();
        const thisRequestURL = `${this.provider.url}${request}?${queryString}`;
        return (0, cross_fetch_1.fetch)(`//${thisRequestURL}`).then((res) => {
            if (res.status === 400) {
                res.json().then((err => { throw new Error(err.error.message); }));
            }
            else if (!res.ok) {
                throw new Error(`Other error occurred with code : ${res.status}`);
            }
            return res.json();
        });
    }
    select(request, identifier, settings) {
        const queryString = (0, queryService_1.processSettings)(settings).toString();
        const thisRequestURL = `${this.provider.url}${request}/${identifier}?${queryString}`;
        return (0, cross_fetch_1.fetch)(`//${thisRequestURL}`).then((res) => {
            if (res.status === 400) {
                res.json().then((err => { throw new Error(err.error.message); }));
            }
            else if (!res.ok) {
                throw new Error(`Other error occurred with code : ${res.status}`);
            }
            return res.json();
        });
    }
    get provider() {
        return this._provider;
    }
    set provider(provider) {
        this._provider = provider;
    }
}
exports.Gegevensmagazijn = Gegevensmagazijn;
