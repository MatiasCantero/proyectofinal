import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 5996;
export const MONGOATLAS = process.env.MONGOATLAS;
