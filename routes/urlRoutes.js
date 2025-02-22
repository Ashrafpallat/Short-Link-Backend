import express from "express";
import { createShortUrl, getUserUrls, redirectToOriginalUrl } from "../controllers/urlController.js";
import jwtAuth from '../middlewares/jwtAuth.js'
const router = express.Router();

router.post("/shorten", jwtAuth, createShortUrl);
router.get("/history", jwtAuth, getUserUrls);
router.get("/:shortUrl", redirectToOriginalUrl);

export default router;
