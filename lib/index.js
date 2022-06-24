"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gegevensmagazijn = void 0;
const initiator_1 = require("./controller/initiator");
const gegevensmagazijn_1 = require("./model/gegevensmagazijn");
// Initialise controller object
(0, initiator_1.initService)();
const gegevensmagazijn = gegevensmagazijn_1.Gegevensmagazijn.self;
exports.gegevensmagazijn = gegevensmagazijn;
gegevensmagazijn.selectAll('Stemming', {
    expand: [
        ['Fractie', '$filter=(NaamNL ne null) ; $orderby=NaamNL'],
        ['Besluit']
    ]
})
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
