import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import programRoutes from "./routes/programRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import eventRoutes from "./routes/eventRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/programs", programRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "NGO CMS API is running",
  });
});


const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  } catch (error) {
    console.error("Server startup failed:", error.message);
  }
};

app.use(errorMiddleware);

startServer();