import { Gegevensmagazijn } from '../gegevensmagazijn';
import { Provider } from '../config/provider';

function setProvider(root: string, OData: string, APIData: string) {
  Gegevensmagazijn.self.provider = new Provider(root, OData, APIData);
}

export { setProvider };