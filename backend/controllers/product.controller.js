import { redis } from "../lib/redis.js";
import cloudinary from "../lib/cloudinary.js";
import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // find all products
    res.json({ products });
  } catch (error) {
    console.log("Error in getAllProducts controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    console.log("=== getFeaturedProducts called ===");

    // Always fetch fresh from MongoDB to ensure we get latest data
    console.log("Fetching featured products from MongoDB");
    const featuredProducts = await Product.find({ isFeatured: true }).lean();

    console.log(`Found ${featuredProducts.length} featured products in database`);
    console.log(
      "Featured product IDs:",
      featuredProducts.map((p) => ({ id: p._id, name: p.name, isFeatured: p.isFeatured }))
    );

    if (!featuredProducts || featuredProducts.length === 0) {
      console.log("No featured products found in database");
      return res.status(404).json({ message: "No featured products found" });
    }

    // Try to update Redis cache (non-blocking)
    if (redis.client) {
      redis.set("featured_products", JSON.stringify(featuredProducts)).catch((err) => {
        console.log("Failed to cache featured products in Redis:", err.message);
      });
    }

    res.json(featuredProducts);
  } catch (error) {
    console.error("Error in getFeaturedProducts controller:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;

    let cloudinaryResponse = null;

    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "products" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
      category,
    });

    res.status(201).json(product);
  } catch (error) {
    console.log("Error in createProduct controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.image) {
      const publicId = product.image.split("/").pop().split(".")[0];
      try {
        await cloudinary.uploader.destroy(`products/${publicId}`);
        console.log("deleted image from cloduinary");
      } catch (error) {
        console.log("error deleting image from cloduinary", error);
      }
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error in deleteProduct controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getRecommendedProducts = async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          description: 1,
          image: 1,
          price: 1,
        },
      },
    ]);

    res.json(products);
  } catch (error) {
    console.log("Error in getRecommendedProducts controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category });
    res.json({ products });
  } catch (error) {
    console.log("Error in getProductsByCategory controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const toggleFeaturedProduct = async (req, res) => {
  try {
    console.log(`=== Toggling featured status for product ID: ${req.params.id} ===`);

    const product = await Product.findById(req.params.id);
    if (product) {
      const oldStatus = product.isFeatured;
      product.isFeatured = !product.isFeatured;
      const updatedProduct = await product.save();

      console.log(
        `✅ Product "${product.name}" featured status: ${oldStatus} → ${product.isFeatured}`
      );

      // Update cache if Redis is available (non-blocking)
      if (redis.client) {
        await updateFeaturedProductsCache();
        console.log("✅ Cache update completed");
      } else {
        console.log("⚠️ Redis not available, skipping cache update");
      }

      res.json(updatedProduct);
    } else {
      console.log("❌ Product not found");
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log("❌ Error in toggleFeaturedProduct controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

async function updateFeaturedProductsCache() {
  try {
    if (!redis.client) {
      console.log("⚠️ Redis client not available, skipping cache update");
      return;
    }

    // Clear the old cache first
    await redis.del("featured_products");
    console.log("🗑️ Old cache cleared");

    // Fetch fresh featured products from database
    const featuredProducts = await Product.find({ isFeatured: true }).lean();
    console.log(`📦 Updating Redis cache with ${featuredProducts.length} featured products`);

    if (featuredProducts.length > 0) {
      await redis.set("featured_products", JSON.stringify(featuredProducts));
      console.log("✅ Redis cache updated successfully");
    } else {
      console.log("⚠️ No featured products to cache");
    }
  } catch (error) {
    console.log("❌ Error in update cache function:", error.message);
  }
}
