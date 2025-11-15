import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

// Import routes
import chatRoutes from "./routes/chat.routes.js";
import subscribeRoutes from "./routes/subscribe.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Register routes *after* app exists
app.use("/api", chatRoutes);
app.use("/api", subscribeRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("FunCare Backend Running");
});

export default app;