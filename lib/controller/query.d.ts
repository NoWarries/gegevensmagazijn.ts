export declare class Query {
    top?: number;
    skip?: number;
    count?: boolean;
    order?: [string, 'asc' | 'desc' | null];
    expand?: Array<Array<string>>;
    filter?: Array<string>;
    select?: Array<string>;
    format?: 'none' | 'minimal' | 'full';
    custom?: string;
    toString?(): string;
}
