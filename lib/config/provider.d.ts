export declare class Provider {
    private readonly root;
    private readonly OData;
    private readonly APIData;
    readonly url: string;
    constructor(root: string, OData: string, APIData: string);
    /**
     * (re)Build the url
     * @returns {string} _url
     */
    buildURL(): string;
    toJSON(): {
        version: {
            OData: string;
            APIData: string;
        };
        url: string;
    };
}
