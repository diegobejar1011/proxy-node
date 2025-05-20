"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyTokenController = void 0;
class VerifyTokenController {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    run(req, res, next) {
        try {
            let token = req.get("Authorization");
            if (!token) {
                res.status(400).json({
                    error: "Error al verificar el token",
                    message: "Token inexistente"
                });
            }
            else {
                token = token.substring(7);
                console.log(token);
                this.authRepository.verifyToken(token);
                next();
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.VerifyTokenController = VerifyTokenController;
