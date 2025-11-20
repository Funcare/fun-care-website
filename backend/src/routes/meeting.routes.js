import express from "express";
import * as meetingController from "../controllers/meeting.controller.js";
import { authenticateAdmin } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.post("/meetings", meetingController.createMeeting);

// Admin routes (authentication required)
router.get("/admin/meetings", authenticateAdmin, meetingController.getAllMeetings);
router.get("/admin/meetings/:id", authenticateAdmin, meetingController.getMeetingById);
router.patch("/admin/meetings/:id/status", authenticateAdmin, meetingController.updateMeetingStatus);
router.delete("/admin/meetings/:id", authenticateAdmin, meetingController.deleteMeeting);

export default router;

