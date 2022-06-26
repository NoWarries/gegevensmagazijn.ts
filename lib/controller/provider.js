"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProvider = void 0;
const gegevensmagazijn_1 = require("../gegevensmagazijn");
const provider_1 = require("../config/provider");
function setProvider(root, OData, APIData) {
    gegevensmagazijn_1.Gegevensmagazijn.self.provider = new provider_1.Provider(root, OData, APIData);
}
exports.setProvider = setProvider;
