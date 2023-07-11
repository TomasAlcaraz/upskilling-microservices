import dotenv from "dotenv";
dotenv.config();

export const MONGO_USER = process.env.MONGO_USER;
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
export const MONGO_CLUSTER = process.env.MONGO_CLUSTER;
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
export const MONGO_URI = process.env.MONGO_URI;
