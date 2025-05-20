import { NextFunction, Request, Response, Router } from "express";
import { verifyTokenController } from "./AuthDependencies";
import { proxyMiddleware } from "./middlewares/ProxyMiddleware";
import { servers, serversWithoutSecurity } from "../../core/constants/servers";


export const AuthRouter = Router();

AuthRouter.get('/info', (req: Request, res: Response, next: NextFunction) =>  {
    res.send("Hi! here proxy");
});

AuthRouter.post("/secure", verifyTokenController.run.bind(verifyTokenController), proxyMiddleware(servers, "secure", "notes"));
AuthRouter.post("/login", proxyMiddleware(serversWithoutSecurity, "login", "users/login"));
AuthRouter.post("/users", proxyMiddleware(serversWithoutSecurity, "users", "users"));