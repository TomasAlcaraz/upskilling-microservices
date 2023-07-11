import express, { Express } from "express";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";

const app: Express = express();
app.use(morgan("dev"));

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true,
  })
);

app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
  })
);

app.use(
  "/database",
  createProxyMiddleware({
    target: "http://database:8004",
    changeOrigin: true,
  })
);

const ENV = {
  PORT: 8000,
};

app.listen(ENV.PORT, () => console.log(`server running on port: ${ENV.PORT}`));
