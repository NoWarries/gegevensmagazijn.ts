import { Gegevensmagazijn } from '../model/gegevensmagazijn';
import { Provider } from '../model/provider';

function setProvider(root: string, OData: string, APIData: string) {
  Gegevensmagazijn.self.provider = new Provider(root, OData, APIData);
}

export { setProvider };