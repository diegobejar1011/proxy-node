"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getService = void 0;
let indiceServicio = 0;
const getService = (servers) => {
    const service = servers[indiceServicio];
    indiceServicio = (indiceServicio + 1) % servers.length;
    return service;
};
exports.getService = getService;
