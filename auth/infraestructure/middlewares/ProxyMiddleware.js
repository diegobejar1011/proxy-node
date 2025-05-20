"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyMiddleware = void 0;
const http_proxy_middleware_1 = require("http-proxy-middleware");
const balanceRoundRobin_1 = require("../../../utils/balanceRoundRobin");
const proxyMiddleware = (servers, path, toPath) => (0, http_proxy_middleware_1.createProxyMiddleware)({
    router: () => (0, balanceRoundRobin_1.getService)(servers),
    changeOrigin: true,
    pathRewrite: {
        [`^/${path}`]: `${toPath}`,
    }
});
exports.proxyMiddleware = proxyMiddleware;
