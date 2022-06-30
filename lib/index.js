"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FractieZetel = exports.Fractie = exports.gegevensmagazijn = void 0;
const initiatorService_1 = require("./service/initiatorService");
const Gegevensmagazijn_1 = require("./Gegevensmagazijn");
const modal_1 = require("./modal");
Object.defineProperty(exports, "Fractie", { enumerable: true, get: function () { return modal_1.Fractie; } });
Object.defineProperty(exports, "FractieZetel", { enumerable: true, get: function () { return modal_1.FractieZetel; } });
// Initialise controller object
(0, initiatorService_1.initService)();
const gegevensmagazijn = Gegevensmagazijn_1.Gegevensmagazijn.self;
exports.gegevensmagazijn = gegevensmagazijn;
