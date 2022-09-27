import { initService } from './service/initiatorService';
import { Gegevensmagazijn } from './Gegevensmagazijn';
import { Fractie, FractieZetel, Stemming, Vergadering, Verslag } from './modal';

// Initialise controller object
initService();
const gegevensmagazijn = Gegevensmagazijn.self;

export {
  gegevensmagazijn,

  Fractie,
  FractieZetel,
  Stemming,
  Vergadering,
  Verslag,
};