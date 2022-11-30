import { genExpansion, genFilter, genSelect } from './QueryService';

export class Query {
  top?: number;
  skip?: number;
  count?: boolean;

  order?: [string, 'asc' | 'desc' | null];
  expand?: Array<Array<string>>;

  filter?: Array<Array<string>>;
  select?: Array<string>;

  format?: 'none' | 'minimal' | 'full';

  custom?: string;

  public toString?(): string {
    let output = '';
    if(this.custom !== null) {
      return this.custom;
    }

    if(this.top !== null) {
      output += `$top=${this.top}&`;
    }
    if(this.skip !== null) {
      output += `$skip=${this.skip}&`;
    }
    if(this.count !== null) {
      output += `$count=${this.count}&`;
    }
    if(this.order !== null) {
      output+= `$orderby=${this.order[0]} ${this.order[1]}&`;
    }
    if(this.format !== null) {
      output += `$format=application/json;odata.metadata=${this.format}&`;
    }

    output += genFilter(this);
    output += genSelect(this);
    output += genExpansion(this);

    if(output.charAt(output.length - 1) === '&') {
      output = output.slice(0,-1);
    }
    return output;
  }
}