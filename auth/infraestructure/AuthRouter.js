"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const AuthDependencies_1 = require("./AuthDependencies");
const ProxyMiddleware_1 = require("./middlewares/ProxyMiddleware");
const servers_1 = require("../../core/constants/servers");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.get('/info', (req, res, next) => {
    res.send("Hi! here proxy");
});
exports.AuthRouter.post("/secure", AuthDependencies_1.verifyTokenController.run.bind(AuthDependencies_1.verifyTokenController), (0, ProxyMiddleware_1.proxyMiddleware)(servers_1.servers, "secure", "notes"));
exports.AuthRouter.post("/login", (0, ProxyMiddleware_1.proxyMiddleware)(servers_1.serversWithoutSecurity, "login", "users/login"));
exports.AuthRouter.post("/users", (0, ProxyMiddleware_1.proxyMiddleware)(servers_1.serversWithoutSecurity, "users", "users"));
