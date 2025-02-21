import Url from "../models/urlModel.js";
import { nanoid } from "nanoid"; // To generate unique short URLs

// Controller to create a short URL
export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const userId = req.userId; // Extracted from JWT middleware

    if (!originalUrl) {
      return res.status(400).json({ message: "Original URL is required" });
    }

    // Generate a short URL using nanoid
    const shortUrl = nanoid(7); // 7-character unique ID

    // Save in database
    const newUrl = await Url.create({ userId, originalUrl, shortUrl });

    res.status(201).json({
      message: "Short URL created successfully",
      shortUrl: newUrl.shortUrl,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// Controller to get all short URLs of a specific user
export const getUserUrls = async (req, res) => {
    try {
      const userId = req.userId; // Extracted from JWT middleware
  
      // Find all URLs created by the user
      const userUrls = await Url.find({ userId });
  
      if (!userUrls.length) {
        return res.status(404).json({ message: "No URLs found for this user" });
      }
  
      res.status(200).json({ urls: userUrls });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
