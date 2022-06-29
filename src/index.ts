import { initService } from './service/initiator';
import { Gegevensmagazijn } from './Gegevensmagazijn';
import * as modal from './controller/Modal';

// Initialise controller object
initService();
const gegevensmagazijn = Gegevensmagazijn.self;

export { gegevensmagazijn, modal };