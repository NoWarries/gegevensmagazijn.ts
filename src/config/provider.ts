export class Provider {
  private readonly root: string;
  private readonly OData: string;
  private readonly APIData: string;
  readonly url: string;

  public constructor(root: string, OData: string, APIData: string) {
    this.root = root;
    this.OData = OData;
    this.APIData = APIData;
    this.url = this.buildURL();
  }

  /**
   * (re)Build the url
   * @returns {string} _url
   */
  public buildURL(): string {
    return `${this.root}/${this.OData}/${this.APIData}/`;
  }

  public toJSON() {
    return {
      version: {
        OData: this.OData,
        APIData: this.APIData,
      },
      url: this.url,
    };
  }
}
