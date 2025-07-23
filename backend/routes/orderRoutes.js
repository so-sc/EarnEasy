import { Router } from "express";
const router = Router();
import { placeBuyOrder, placeSellOrder, getUserOrders } from "../controllers/orderController";

// Routes
router.post("/buy", placeBuyOrder);
router.post("/sell", placeSellOrder);
router.get("/:userId", getUserOrders); // Get all orders by user

export default router;
