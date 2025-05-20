import express, { NextFunction, Request, Response, Router } from "express";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";
import { config } from "./core/constants/config";
import { verifyTokenController } from "./auth/infraestructure/AuthDependencies";
import { AuthRouter } from "./auth/infraestructure/AuthRouter";

const app = express();

app.use(morgan('dev'));

app.use("", AuthRouter);

app.listen(config.port, () => {
    console.log("Starting proxy");
});