import { Provider } from './Provider';

export class ProviderBuilder {
  private root: string;
  private OData: string;
  private APIData: string;

  public setRoot(root: string) {
    this.root = root;
  }

  public setOData(OData: string) {
    this.OData = OData;
  }

  public setAPIData(APIData: string) {
    this.APIData = APIData;
  }

  public build(): Provider {
    return new Provider(this.root, this.OData, this.APIData);
  }
}
