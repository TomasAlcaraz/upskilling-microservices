import express, { Express } from "express";
import morgan from "morgan";
import router from "./routes";

const server: Express = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(router);

export default server;
