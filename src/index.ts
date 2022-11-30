import { Fractie, FractieZetel, Stemming, Vergadering, Verslag } from './modal';
import { GegevensmagazijnSingleton } from './app/GegevensmagazijnSingleton';

const gegevensmagazijn = GegevensmagazijnSingleton.getInstance();

export {
  gegevensmagazijn,
  Fractie,
  FractieZetel,
  Stemming,
  Vergadering,
  Verslag,
};
