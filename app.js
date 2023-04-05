import express from "express";
import { config } from "dotenv";
import userRouter from './routes/userRoutes.js'
import taskRouter from './routes/todoRoutes.js'
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middleware/error.js";

export const app = express();



config({
  path: "./data/config.env",
});

// console.log("FRONTEND_URL", process.env.FRONTEND_URL);

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: '*'
  })
);

// Using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Hello backend");
});

// Using Error Middleware
app.use(errorMiddleware);
