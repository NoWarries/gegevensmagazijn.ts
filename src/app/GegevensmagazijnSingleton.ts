import {Gegevensmagazijn} from './Gegevensmagazijn';
import {ProviderBuilder} from '../provider/ProviderBuilder';

import common from '../config/common';
const config = common();

export class GegevensmagazijnSingleton {
    private static instance: Gegevensmagazijn;

    public static getInstance(): Gegevensmagazijn {
        if (!GegevensmagazijnSingleton.instance) {
            const providerBuilder = new ProviderBuilder();
            providerBuilder.setRoot(config.provider.url);
            providerBuilder.setOData(config.provider.OData);
            providerBuilder.setAPIData(config.provider.APIData);
            GegevensmagazijnSingleton.instance = new Gegevensmagazijn(providerBuilder.build());
        }

        return GegevensmagazijnSingleton.instance;
    }

}