import express from "express";
import { addMobile, retMobile, filterMobile} from "../controllers/mobile.js";


const router = express.Router();

router.post("/add-mobile", addMobile);
router.post("/ret-mobile", retMobile);
router.post("/filter-mobile", filterMobile);

export default router