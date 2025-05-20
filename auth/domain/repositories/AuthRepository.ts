export interface AuthRepository {
    verifyToken(token: string): void;
}