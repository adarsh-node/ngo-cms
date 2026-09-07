import express from "express";

import {
  getMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
} from "../controllers/messageController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

//Public
router.post("/", createMessage);

//Admin Only
router.get("/", authMiddleware, getMessages);
router.get("/:id", authMiddleware, getMessageById);
router.put("/:id", authMiddleware, updateMessage);
router.delete("/:id", authMiddleware, deleteMessage);

export default router;