import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtAuth = (req, res, next) => {
  try {
    // Get token from cookies
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach user ID to req.user
    req.userId = decoded.userId ;
    
    next(); // Continue to the next middleware or route
  } catch (error) {
    res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

export default jwtAuth;
