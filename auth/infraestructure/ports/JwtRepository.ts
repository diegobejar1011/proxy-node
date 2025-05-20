import { SECRET_KEY } from "../../domain/constants/SECRET_KEY";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import jwt from "jsonwebtoken";

export class JwtRepository implements AuthRepository {

    verifyToken(token: string): void {
        try {
            
            jwt.verify(token, SECRET_KEY);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    
}