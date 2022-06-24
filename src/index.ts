import { initService } from './controller/initiator';
import { Gegevensmagazijn } from './model/gegevensmagazijn';

// Initialise controller object
initService();
const gegevensmagazijn = Gegevensmagazijn.self;

export { gegevensmagazijn };

