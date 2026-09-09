import express from "express";

import {
  getNews,
  getNewsById,
  getAdminNews,
  createNews,
  updateNews,
  deleteNews,
} from "../controllers/newsController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getNews);
router.get("/admin", authMiddleware, getAdminNews);
router.get("/:id", getNewsById);

router.post("/", authMiddleware, createNews);
router.put("/:id", authMiddleware, updateNews);
router.delete("/:id", authMiddleware, deleteNews);

export default router;