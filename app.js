"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("./core/constants/config");
const AuthRouter_1 = require("./auth/infraestructure/AuthRouter");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use("", AuthRouter_1.AuthRouter);
app.listen(config_1.config.port, () => {
    console.log("Starting proxy to unique endpoit... go to work!");
});
