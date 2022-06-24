import { Gegevensmagazijn } from '../model/gegevensmagazijn';
import { Provider } from '../model/provider';
import common from '../config/common';
const config = common();

function initService(): void {
  // Set up provider with default config data
  const provider = new Provider(
    config.provider.url,
    config.provider.OData,
    config.provider.APIData,
  );

  new Gegevensmagazijn( provider );
}

export { initService };
