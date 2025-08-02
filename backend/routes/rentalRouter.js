import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import {placeOrder, getAllOrders, specificOrder, updateStatus, extendPeriod, activeRentals} from "../controllers/rentalContoller.js";

const router = express.Router();


// POST /rentals — Place a rental order (protected)
router.post("/", authenticateToken, placeOrder);

// GET /rentals — Get all rental orders for the authenticated user (as renter or owner)
router.get("/", authenticateToken, getAllOrders);

// GET /rentals/active — Get active rentals for the user
router.get("/active", authenticateToken, activeRentals);

// GET /rentals/:id — Get details of a specific rental order
router.get("/:id", authenticateToken, specificOrder);

// PUT /rentals/:id/status — Update rental status
router.put("/:id/status", authenticateToken, updateStatus);

// PUT /rentals/:id/extend — Extend the rental period (optional)
router.put("/:id/extend", authenticateToken, extendPeriod);

export default router;