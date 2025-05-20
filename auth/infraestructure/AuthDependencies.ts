import { JwtRepository } from "./ports/JwtRepository";

import { VerifyTokenController } from "./middlewares/VerifyTokenController";

const jwtRepository = new JwtRepository();

export const verifyTokenController = new VerifyTokenController(jwtRepository);