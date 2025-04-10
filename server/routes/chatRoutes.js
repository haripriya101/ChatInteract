import express from "express";
import { sendMessage, getChatHistory } from "../controllers/chatController.js";
import { verifyToken } from "../config/authMiddleware.js";

const router = express.Router();

router.post("/send", verifyToken, sendMessage);
router.get("/history", verifyToken, getChatHistory);

export default router;
