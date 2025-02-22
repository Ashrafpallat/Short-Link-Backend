import Url from "../models/urlModel.js";
import { nanoid } from "nanoid"; 

export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const userId = req.userId; 

    if (!originalUrl) {
      return res.status(400).json({ message: "Original URL is required" });
    }

    const shortUrl = nanoid(7); // 7-character unique ID

    const newUrl = await Url.create({ userId, originalUrl, shortUrl });

    res.status(201).json({
      message: "Short URL created successfully",
      shortUrl: newUrl.shortUrl,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
export const getUserUrls = async (req, res) => {
    try {
      const userId = req.userId; 
  
      const userUrls = await Url.find({ userId });
  
      if (!userUrls.length) {
        return res.status(404).json({ message: "No URLs found for this user" });
      }
  
      res.status(200).json({ urls: userUrls });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  export const redirectToOriginalUrl = async (req, res) => {
    try {
      const { shortUrl } = req.params;
  
      const urlEntry = await Url.findOne({ shortUrl });
  
      if (!urlEntry) {
        return res.status(404).json({ message: "URL not found" });
      }
  
      urlEntry.clicks += 1;
      await urlEntry.save();
  
      return res.redirect(urlEntry.originalUrl);
    } catch (error) {
      console.error("Error redirecting URL:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
