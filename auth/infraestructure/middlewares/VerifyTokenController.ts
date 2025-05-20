import { NextFunction, Request, Response } from "express";
import { AuthRepository } from "../../domain/repositories/AuthRepository";

export class VerifyTokenController {
    constructor(private readonly authRepository: AuthRepository) {}

    run(req: Request, res: Response, next: NextFunction) {
        try {
            
            let token = req.get("Authorization");

            if(!token) {
                res.status(400).json({
                    error: "Error al verificar el token",
                    message: "Token inexistente"
                })
            } else {
                token = token.substring(7);
                console.log(token);
                this.authRepository.verifyToken(token);
                next();
            }

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}