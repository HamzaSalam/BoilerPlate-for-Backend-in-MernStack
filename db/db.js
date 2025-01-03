import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

function connect() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error(error));
}

export default connect;
