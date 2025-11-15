import express from "express";
import { subscribeController } from "../controllers/subscribe.controller.js";

const router = express.Router();

router.post("/subscribe", subscribeController);

export default router;