import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import urlRoutes from './routes/urlRoutes.js'
import cookieParser from "cookie-parser";
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser()); // Enable reading cookies
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);
app.use("/api/auth", authRoutes);
app.use("/api/url", urlRoutes);
// Handle short URL redirection globally
app.use("/", urlRoutes); // <-- Add this to handle direct short URL access

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
