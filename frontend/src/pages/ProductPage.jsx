import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Minus, Plus, ArrowLeft, Package, Truck, ShieldCheck } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";
import { useCartStore } from "../stores/useCartStore";
import { useUserStore } from "../stores/useUserStore";
import toast from "react-hot-toast";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, fetchAllProducts } = useProductStore();
  const { addToCart } = useCartStore();
  const { user } = useUserStore();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      if (products.length === 0) {
        await fetchAllProducts();
      }
      const foundProduct = products.find((p) => p._id === id);
      setProduct(foundProduct);
      setLoading(false);
    };

    loadProduct();
  }, [id, products, fetchAllProducts]);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
      navigate("/login");
      return;
    }

    // Add to cart multiple times based on quantity, but show toast only once
    try {
      for (let i = 0; i < quantity; i++) {
        await addToCart(product, { silent: true });
      }
      toast.success(`Added ${quantity} ${quantity > 1 ? "items" : "item"} to cart`, {
        id: "add-to-cart",
      });
    } catch {
      toast.error("Failed to add product to cart");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="relative">
          <div className="w-20 h-20 border-grey-200 border-2 rounded-full" />
          <div className="w-20 h-20 border-primary border-t-2 animate-spin rounded-full absolute left-0 top-0" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold text-grey-900 mb-4">Product Not Found</h2>
        <p className="text-grey-500 mb-6">
          The product you&apos;re looking for doesn&apos;t exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-grey-700 hover:text-primary transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-lg shadow-lg border border-grey-200 overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isFeatured && (
                  <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md">
                    FEATURED
                  </div>
                )}
              </div>
            </div>

            {/* Product Features */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-grey-200 shadow-sm">
                <Package className="text-primary mb-2" size={24} />
                <span className="text-xs text-grey-500 font-medium">Free Returns</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-grey-200 shadow-sm">
                <Truck className="text-secondary mb-2" size={24} />
                <span className="text-xs text-grey-500 font-medium">Fast Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-grey-200 shadow-sm">
                <ShieldCheck className="text-accent mb-2" size={24} />
                <span className="text-xs text-grey-500 font-medium">Secure Payment</span>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-4">{product.name}</h1>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-grey-900">${product.price}</span>
              <span className="text-grey-500 ml-2">USD</span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-grey-900 mb-3">Description</h2>
              <p className="text-grey-500 leading-relaxed">
                {product.description ||
                  "Discover this premium product from our collection. Crafted with attention to detail and quality materials, this item is designed to exceed your expectations. Perfect for everyday use or special occasions."}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-grey-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  disabled={quantity <= 1}
                  className="w-12 h-12 flex items-center justify-center rounded-lg border border-grey-300 bg-white hover:bg-primary hover:text-white hover:border-primary disabled:bg-grey-100 disabled:cursor-not-allowed disabled:hover:bg-grey-100 disabled:hover:text-grey-400 disabled:hover:border-grey-300 transition-all duration-200 shadow-sm"
                >
                  <Minus size={20} />
                </button>

                <span className="text-2xl font-bold text-grey-900 min-w-[60px] text-center">
                  {quantity}
                </span>

                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="w-12 h-12 flex items-center justify-center rounded-lg border border-grey-300 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full bg-primary hover:bg-primary-dark text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-3 mb-4"
            >
              <ShoppingCart size={24} />
              Add to Cart
            </motion.button>

            {/* Buy Now Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                handleAddToCart();
                setTimeout(() => navigate("/cart"), 500);
              }}
              className="w-full bg-white hover:bg-grey-50 text-grey-900 py-4 px-6 rounded-lg font-bold text-lg transition-all duration-200 border border-grey-300 hover:border-primary flex items-center justify-center gap-3"
            >
              Buy Now
            </motion.button>

            {/* Product Info */}
            <div className="mt-8 p-6 bg-grey-50 rounded-lg border border-grey-200">
              <h3 className="text-lg font-bold text-grey-900 mb-4">Product Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-grey-500">Category:</span>
                  <span className="text-grey-900 font-medium capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grey-500">Availability:</span>
                  <span className="text-secondary font-medium">In Stock</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grey-500">Product ID:</span>
                  <span className="text-grey-900 font-medium text-sm">
                    {product._id.slice(-8).toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
