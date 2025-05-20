"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtRepository = void 0;
const SECRET_KEY_1 = require("../../domain/constants/SECRET_KEY");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtRepository {
    verifyToken(token) {
        try {
            jsonwebtoken_1.default.verify(token, SECRET_KEY_1.SECRET_KEY);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.JwtRepository = JwtRepository;
