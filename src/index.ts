import { initService } from './controller/initiator';
import { Gegevensmagazijn } from './model/gegevensmagazijn';

// Initialise controller object
initService();
const gegevensmagazijn = Gegevensmagazijn.self;
gegevensmagazijn.selectAll('Stemming', {
  expand : [
    ['Fractie', '$filter=(NaamNL ne null) ; $orderby=NaamNL'],
    ['Besluit']
  ]
})
  .then((data) => console.log(data))
  .catch((err) => console.error(err));


export { gegevensmagazijn };

