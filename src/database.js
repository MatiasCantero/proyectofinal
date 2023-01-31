import mongoose from "mongoose";
import { MONGOATLAS } from "./config.js";

try {
  const db = await mongoose.connect(MONGOATLAS,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
  console.log("Connected to ", db.connection.name);
} catch (error) {
  console.error(error);
}

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});

//-----------

