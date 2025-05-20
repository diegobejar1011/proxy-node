import dotenv from "dotenv";

dotenv.config();

export const config = {
    port: process.env.PORT || 3001,
    host: process.env.HOST || "localhost"
}