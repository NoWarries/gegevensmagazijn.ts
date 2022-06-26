"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genExpansion = exports.genSelect = exports.genFilter = exports.processSettings = void 0;
const query_1 = require("../controller/query");
function processSettings(settings) {
    const thisQuery = new query_1.Query(); // setup query
    if (settings === undefined || settings === null) {
        return thisQuery;
    }
    thisQuery.top = settings['top'] || null;
    thisQuery.skip = settings['skip'] || null;
    thisQuery.count = settings['count'] || null;
    thisQuery.select = settings['select'] || null;
    thisQuery.order = settings['order'] || null;
    thisQuery.filter = settings['filter'] || null;
    thisQuery.expand = settings['expand'] || null;
    thisQuery.custom = settings['custom'] || null;
    return thisQuery;
}
exports.processSettings = processSettings;
function genFilter(thisQuery) {
    let useFilter = false;
    let filterString = '$filter=( ';
    if (thisQuery.filter !== null) {
        useFilter = true;
        thisQuery.filter.forEach((filterRule) => {
            filterString += `${filterRule} `;
        });
    }
    if (useFilter) {
        return `${filterString})&`.trim();
    }
    return '';
}
exports.genFilter = genFilter;
function genSelect(thisQuery) {
    let useSelect = false;
    let selectString = '$select=';
    if (thisQuery.select !== null) {
        useSelect = true;
        thisQuery.select.forEach((selectAttribute) => {
            selectString += `${selectAttribute},`;
        });
    }
    if (useSelect) {
        return `${selectString.slice(0, -1)}&`.trim();
    }
    return '';
}
exports.genSelect = genSelect;
function genExpansion(thisQuery) {
    let useExpand = false;
    let expandString = '$expand=';
    if (thisQuery.expand !== null) {
        useExpand = true;
        thisQuery.expand.forEach((actor) => {
            if (actor[1] !== null && actor[1] !== undefined) {
                expandString += `${actor[0]}`;
                expandString += `(${actor[1]}),`;
            }
            else {
                expandString += `${actor[0]},`;
            }
            expandString += '';
        });
    }
    if (useExpand) {
        return `${expandString.slice(0, -1)}&`.trim();
    }
    return '';
}
exports.genExpansion = genExpansion;
