import express from "express";
import { createShortUrl, getUserUrls } from "../controllers/urlController.js";
import jwtAuth from '../middlewares/jwtAuth.js'
const router = express.Router();

// Route to create a short URL (protected route)
router.post("/shorten", jwtAuth, createShortUrl);
// Route to get all URLs of a user (protected route)
router.get("/history", jwtAuth, getUserUrls);

export default router;
