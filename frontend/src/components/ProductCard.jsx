import toast from "react-hot-toast";
import { ShoppingCart, Eye, Heart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useWishlistStore } from "../stores/useWishlistStore";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { user } = useUserStore();
  const { addToCart } = useCartStore();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const navigate = useNavigate();

  const inWishlist = isInWishlist(product._id);

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
      return;
    } else {
      // add to cart
      addToCart(product);
    }
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (!user) {
      toast.error("Please login to add products to wishlist", { id: "login" });
      return;
    }
    if (inWishlist) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="flex w-full relative flex-col overflow-hidden rounded-lg border border-grey-300 shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      <div
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl cursor-pointer"
        onClick={() => navigate(`/product/${product._id}`)}
      >
        <img className="object-cover w-full" src={product.image} alt="product image" />
        <div className="absolute inset-0 bg-black bg-opacity-5 hover:bg-opacity-10 transition-all duration-200" />
        <button
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-200 z-10"
          title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={20}
            className={inWishlist ? "text-red-500" : "text-grey-400"}
            fill={inWishlist ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="mt-4 px-5 pb-5">
        <h5
          className="text-xl font-semibold tracking-tight text-black cursor-pointer hover:text-grey-700 transition-colors duration-200"
          onClick={() => navigate(`/product/${product._id}`)}
        >
          {product.name}
        </h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-black">${product.price}</span>
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className="flex-1 flex items-center justify-center rounded-lg bg-white border border-grey-300 px-4 py-2.5 text-center text-sm font-medium
					   text-black hover:bg-grey-100 hover:border-black focus:outline-none focus:ring-2 focus:ring-grey-400 focus:ring-opacity-40 transition-all duration-200"
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <Eye size={18} className="mr-2" />
            View
          </button>

          <button
            className="flex-1 flex items-center justify-center rounded-lg bg-black px-4 py-2.5 text-center text-sm font-medium
					   text-white hover:bg-grey-800 focus:outline-none focus:ring-4 focus:ring-grey-400 focus:ring-opacity-40 transition-all duration-200 shadow-md hover:shadow-lg"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} className="mr-2" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
