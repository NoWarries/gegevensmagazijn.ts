export class Settings {
  _top?: number;

  skip?: number;
  count?: boolean;

  order?: [string, 'asc' | 'desc' | null];
  expand?: Array<Array<string>>;

  filter?: Array<Array<string>>;
  select?: Array<string>;

  format?: 'none' | 'minimal' | 'full';

  custom?: string;

  // Getter(s)
  get top(): number {
    return this._top;
  }
  // Setter(s)
  set top(top: number) {
    if (top != null && top < 0) {
      throw new Error(
        'Settings function `top` required to be positive, you inputted : ' + top
      );
    }
    this._top = top;
  }
}
