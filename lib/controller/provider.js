"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProvider = void 0;
const Gegevensmagazijn_1 = require("../Gegevensmagazijn");
const provider_1 = require("../config/provider");
function setProvider(root, OData, APIData) {
    Gegevensmagazijn_1.Gegevensmagazijn.self.provider = new provider_1.Provider(root, OData, APIData);
}
exports.setProvider = setProvider;
