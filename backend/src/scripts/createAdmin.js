import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";
import { connectDB } from "../config/db.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const username = process.argv[2] || "admin";
    const password = process.argv[3] || "admin123";
    const email = process.argv[4] || "admin@funcare.com";

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      $or: [{ username }, { email }],
    });

    if (existingAdmin) {
      console.log("Admin already exists with this username or email.");
      process.exit(0);
    }

    // Create admin
    const admin = await Admin.create({
      username,
      password,
      email,
    });

    console.log("Admin created successfully!");
    console.log(`Username: ${admin.username}`);
    console.log(`Email: ${admin.email}`);
    console.log("\nYou can now login at /admin/login");

    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();

