import express from "express";
import {
  getPrograms,
  createProgram,
  getProgramById,
  updateProgram,
  deleteProgram,
} from "../controllers/programController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPrograms);
router.get("/:id", getProgramById);

router.post("/", authMiddleware, createProgram);
router.put("/:id", authMiddleware, updateProgram);
router.delete("/:id", authMiddleware, deleteProgram);

export default router;