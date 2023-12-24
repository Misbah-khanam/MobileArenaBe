import express from "express";
import { addOrder, retOrders } from "../controllers/order.js";

const router = express.Router();

router.post("/add-order", addOrder);
router.post("/ret-order", retOrders);

export default router