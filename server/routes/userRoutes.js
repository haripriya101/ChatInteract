import express from "express";
import { updateUser } from "../controllers/userController.js";
import { verifyToken } from "../config/authMiddleware.js";

const router = express.Router();

router.put("/update", verifyToken, updateUser);

export default router;
