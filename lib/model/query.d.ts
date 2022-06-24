export declare class Query {
    top?: number;
    skip?: number;
    count?: boolean;
    order?: [string, 'asc' | 'desc' | null];
    expand?: Array<Array<string>>;
    filter?: Array<string>;
    select?: Array<string>;
    custom?: any;
    toString(): string;
}
