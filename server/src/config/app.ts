import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "../routes/user";
import postsRouter from "../routes/posts";
import authorRouter from "../routes/author";

// Iniicalizaciones.
const app = express();

// Settings.
app.set("port", process.env.PORT || 5000);

// Middlewares.
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({
   extended: false
}))
app.use(express.json());

// Routes.
app.use(userRouter);
app.use(postsRouter);
app.use(authorRouter);

// Exportando configuracion del servidor.
export default app;
