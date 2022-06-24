"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
class Provider {
    root;
    OData;
    APIData;
    url;
    constructor(root, OData, APIData) {
        this.root = root;
        this.OData = OData;
        this.APIData = APIData;
        this.url = this.buildURL();
    }
    /**
     * (re)Build the url
     * @returns {string} _url
     */
    buildURL() {
        return `${this.root}/${this.OData}/${this.APIData}/`;
    }
    toJSON() {
        return {
            version: {
                OData: this.OData,
                APIData: this.APIData,
            },
            url: this.url,
        };
    }
}
exports.Provider = Provider;
