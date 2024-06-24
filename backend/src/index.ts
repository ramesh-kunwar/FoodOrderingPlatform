import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

const app = express();

app.use(express.json()); // convert request body to json
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.json({
    message: "Food Ordering Platform",
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
