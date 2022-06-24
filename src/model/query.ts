import { genExpansion, genFilter, genSelect } from '../service/queryService';

export class Query {
  top?: number;
  skip?: number;
  count?: boolean;

  order?: [string, 'asc' | 'desc' | null];
  expand?: Array<Array<string>>;

  filter?: Array<string>;
  select?: Array<string>;

  custom?: any;

  public toString(): string {
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

    output += genFilter(this);
    output += genSelect(this);
    output += genExpansion(this);

    if(output.charAt(output.length - 1) === '&') {
      output = output.slice(0,-1);
    }
    return output;
  }
}