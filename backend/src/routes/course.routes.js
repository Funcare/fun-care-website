import express from "express";
import * as courseController from "../controllers/course.controller.js";
import { authenticateAdmin } from "../middleware/auth.js";

const router = express.Router();

// Public routes (no authentication required)
router.get("/courses", courseController.getPublicCourses);
router.get("/courses/slug/:slug", courseController.getPublicCourseBySlug);

// Admin routes (authentication required)
router.get("/admin/courses", authenticateAdmin, courseController.getAllCourses);
router.get("/admin/courses/:id", authenticateAdmin, courseController.getCourseById);
router.post("/admin/courses", authenticateAdmin, courseController.createCourse);
router.put("/admin/courses/:id", authenticateAdmin, courseController.updateCourse);
router.delete("/admin/courses/:id", authenticateAdmin, courseController.deleteCourse);
router.patch("/admin/courses/:id/toggle", authenticateAdmin, courseController.toggleCourseStatus);
router.patch("/admin/courses/:id/publish", authenticateAdmin, courseController.publishCourse);

export default router;

