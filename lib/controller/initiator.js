"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initService = void 0;
const gegevensmagazijn_1 = require("../gegevensmagazijn");
const provider_1 = require("../config/provider");
const common_1 = __importDefault(require("../config/common"));
const config = (0, common_1.default)();
function initService() {
    // Set up provider with default config data
    const provider = new provider_1.Provider(config.provider.url, config.provider.OData, config.provider.APIData);
    new gegevensmagazijn_1.Gegevensmagazijn(provider);
}
exports.initService = initService;
