import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js";

dotenv.config();

const products = [
  {
    name: "Classic Slim Jeans",
    description: "Comfortable slim-fit denim jeans for everyday wear.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    category: "jeans",
    isFeatured: true,
  },
  {
    name: "Essential Cotton T-Shirt",
    description: "Soft, breathable cotton tee in a relaxed fit.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    category: "t-shirts",
    isFeatured: true,
  },
  {
    name: "Running Sneakers",
    description: "Lightweight sneakers built for daily runs and casual wear.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    category: "shoes",
    isFeatured: true,
  },
  {
    name: "Aviator Sunglasses",
    description: "Classic aviator-style sunglasses with UV protection.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    category: "glasses",
    isFeatured: false,
  },
  {
    name: "Leather Bomber Jacket",
    description: "Timeless bomber jacket crafted from genuine leather.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    category: "jackets",
    isFeatured: true,
  },
  {
    name: "Tailored Business Suit",
    description: "Two-piece tailored suit for a sharp, professional look.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600",
    category: "suits",
    isFeatured: false,
  },
  {
    name: "Leather Tote Bag",
    description: "Spacious leather tote bag with an interior zip pocket.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    category: "bags",
    isFeatured: false,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const inserted = await Product.insertMany(products);
    console.log(`Inserted ${inserted.length} products`);
  } catch (error) {
    console.error("Seed failed:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
