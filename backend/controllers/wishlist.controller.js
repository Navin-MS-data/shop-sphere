import Product from "../models/product.model.js";

export const getWishlistProducts = async (req, res) => {
	try {
		const products = await Product.find({ _id: { $in: req.user.wishlistItems } });
		res.json(products);
	} catch (error) {
		console.log("Error in getWishlistProducts controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const addToWishlist = async (req, res) => {
	try {
		const { productId } = req.body;
		const user = req.user;

		// Check if product already exists in wishlist
		const existingItem = user.wishlistItems.find((item) => item.toString() === productId);
		if (existingItem) {
			return res.status(400).json({ message: "Product already in wishlist" });
		}

		user.wishlistItems.push(productId);
		await user.save();

		res.json(user.wishlistItems);
	} catch (error) {
		console.log("Error in addToWishlist controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const removeFromWishlist = async (req, res) => {
	try {
		const { productId } = req.body;
		const user = req.user;

		user.wishlistItems = user.wishlistItems.filter((item) => item.toString() !== productId);
		await user.save();

		res.json(user.wishlistItems);
	} catch (error) {
		console.log("Error in removeFromWishlist controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};
