import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { fetchProductsByCategory, products } = useProductStore();
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    fetchProductsByCategory(category);
  }, [fetchProductsByCategory, category]);

  console.log("products:", products);
  return (
    <div className="min-h-screen">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 text-grey-700 hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>

        <motion.h1
          className="text-center text-4xl sm:text-5xl font-bold text-grey-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {products?.length === 0 && (
            <h2 className="text-3xl font-semibold text-grey-500 text-center col-span-full">
              No products found
            </h2>
          )}

          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default CategoryPage;
