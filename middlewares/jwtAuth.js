import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtAuth = (req, res, next) => {
  try {
    console.log('req.coockies',req.cookies);
    
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId ;
    
    next(); 
  } catch (error) {
    res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

export default jwtAuth;
