import express from "express";
import dotenv from "dotenv";
import enums from "./constant/enums.js";
import blogRoute from "./routes/blogRoute.js";
import mongoose from "mongoose";

const app = express();

dotenv.config();

app.use(express.json());

app.use("/blogs", blogRoute);

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then((req, res) => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.log("Connection Failed! to MongoDB");
  });

app.get("/", (req, res) => {
  try {
    res.status(200).send({ status: 200, message: enums.SUCCESS_200 });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.NOT_FOUND_404 });
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
