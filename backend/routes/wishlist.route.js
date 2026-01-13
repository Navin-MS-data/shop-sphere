import express from "express";
import { addToWishlist, getWishlistProducts, removeFromWishlist } from "../controllers/wishlist.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, getWishlistProducts);
router.post("/", protectRoute, addToWishlist);
router.delete("/", protectRoute, removeFromWishlist);

export default router;
