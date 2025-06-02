import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import router from "./routers/Problem.js";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/firecode";
console.log(MONGODB_URI);

mongoose.connect(MONGODB_URI);

export const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

const app = express();
const port = process.env.PORT || 80;


// app.use(cors());

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
    console.log(`server listening at port: ${port}`);
});
