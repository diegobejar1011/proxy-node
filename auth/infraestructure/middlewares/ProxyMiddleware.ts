import { createProxyMiddleware } from "http-proxy-middleware";
import { getService } from "../../../utils/balanceRoundRobin";

export const proxyMiddleware = (servers: Array<string>, path: string, toPath: string) => createProxyMiddleware({
    router: () => getService(servers),
    changeOrigin: true,
    pathRewrite: {
       [`^/${path}`]: `${toPath}`,
   }
});