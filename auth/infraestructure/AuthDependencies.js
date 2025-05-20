"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenController = void 0;
const JwtRepository_1 = require("./ports/JwtRepository");
const VerifyTokenController_1 = require("./middlewares/VerifyTokenController");
const jwtRepository = new JwtRepository_1.JwtRepository();
exports.verifyTokenController = new VerifyTokenController_1.VerifyTokenController(jwtRepository);
