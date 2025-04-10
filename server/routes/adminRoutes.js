import express from "express";
import { getAllUsers, deleteUser } from "../controllers/adminController.js";
import { verifyToken, isAdmin } from "../config/authMiddleware.js";

const router = express.Router();

router.get("/users", verifyToken, isAdmin, getAllUsers);
router.delete("/users/:id", verifyToken, isAdmin, deleteUser);

export default router;
