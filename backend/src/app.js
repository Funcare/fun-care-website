import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

// Import routes
import chatRoutes from "./routes/chat.routes.js";
import subscribeRoutes from "./routes/subscribe.routes.js";
import programRoutes from "./routes/program.routes.js";
import courseRoutes from "./routes/course.routes.js";
import authRoutes from "./routes/auth.routes.js";
import meetingRoutes from "./routes/meeting.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Register routes *after* app exists
app.use("/api", chatRoutes);
app.use("/api", subscribeRoutes);
app.use("/api", programRoutes);
app.use("/api", courseRoutes);
app.use("/api", authRoutes);
app.use("/api", meetingRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("FunCare Backend Running");
});

export default app;