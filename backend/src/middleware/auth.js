import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";

// JWT authentication middleware for admin routes
export const authenticateAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided. Please login first.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Check if admin exists
    const admin = await Admin.findById(decoded.adminId);
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Admin not found",
      });
    }

    // Attach admin to request
    req.admin = admin;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired. Please login again.",
      });
    }
    return res.status(500).json({
      success: false,
      message: "Authentication error",
      error: error.message,
    });
  }
};

