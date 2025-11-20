import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

// Generate JWT token
const generateToken = (adminId) => {
  return jwt.sign({ adminId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

// Login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check password
    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate token
    const token = generateToken(admin._id);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token,
        admin: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error during login",
      error: error.message,
    });
  }
};

// Verify token (check if admin is authenticated)
export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const admin = await Admin.findById(decoded.adminId).select("-password");

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Admin not found",
      });
    }

    res.status(200).json({
      success: true,
      data: {
        admin: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
        },
      },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

// Register (for initial admin creation - can be removed or protected later)
export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({
        success: false,
        message: "Username, password, and email are required",
      });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      $or: [{ username }, { email }],
    });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin with this username or email already exists",
      });
    }

    // Create admin
    const admin = await Admin.create({ username, password, email });

    // Generate token
    const token = generateToken(admin._id);

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: {
        token,
        admin: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating admin",
      error: error.message,
    });
  }
};

