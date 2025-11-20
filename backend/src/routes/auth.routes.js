import express from "express";
import * as authController from "../controllers/auth.controller.js";

const router = express.Router();

// Public routes
router.post("/admin/login", authController.login);
router.get("/admin/verify", authController.verify);
router.post("/admin/register", authController.register); // For initial setup

export default router;

