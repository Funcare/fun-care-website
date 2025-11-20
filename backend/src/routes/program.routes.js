import express from "express";
import * as programController from "../controllers/program.controller.js";
import { authenticateAdmin } from "../middleware/auth.js";

const router = express.Router();

// Public routes (no authentication required)
router.get("/programs", programController.getPublicPrograms);
router.get("/programs/slug/:slug", programController.getPublicProgramBySlug);

// Admin routes (authentication required)
router.get("/admin/programs", authenticateAdmin, programController.getAllPrograms);
router.get("/admin/programs/:id", authenticateAdmin, programController.getProgramById);
router.post("/admin/programs", authenticateAdmin, programController.createProgram);
router.put("/admin/programs/:id", authenticateAdmin, programController.updateProgram);
router.delete("/admin/programs/:id", authenticateAdmin, programController.deleteProgram);
router.patch("/admin/programs/:id/toggle", authenticateAdmin, programController.toggleProgramStatus);

export default router;

