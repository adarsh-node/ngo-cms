import express from "express";

import {
  getGallery,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery,
} from "../controllers/galleryController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getGallery);
router.get("/:id", getGalleryById);

router.post("/", authMiddleware, createGallery);
router.put("/:id", authMiddleware, updateGallery);
router.delete("/:id", authMiddleware, deleteGallery);

export default router;