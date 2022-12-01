export class Settings {
  top?: number;

  skip?: number;
  count?: boolean;

  order?: [string, 'asc' | 'desc' | null];
  expand?: Array<Array<string>>;

  filter?: Array<Array<string>>;
  select?: Array<string> | string[][];

  format?: 'none' | 'minimal' | 'full' | string;

  custom?: string;
}
