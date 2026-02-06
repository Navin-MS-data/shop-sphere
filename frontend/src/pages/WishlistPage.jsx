import { useEffect } from "react";
import { useWishlistStore } from "../stores/useWishlistStore";
import { useCartStore } from "../stores/useCartStore";
import { Trash2, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const WishlistPage = () => {
  const { wishlist, loading, getWishlistItems, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();
  const navigate = useNavigate();

  useEffect(() => {
    getWishlistItems();
  }, [getWishlistItems]);

  const handleAddToCart = async (product) => {
    await addToCart(product);
  };

  const handleRemoveFromWishlist = async (productId) => {
    await removeFromWishlist(productId);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-4xl font-bold text-grey-900">My Wishlist</h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-grey-700 mb-2">Your wishlist is empty</h2>
            <p className="text-grey-500 mb-6">
              Start adding your favorite products to your wishlist!
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product._id}
                className="bg-white border border-grey-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="relative h-64 overflow-hidden cursor-pointer group"
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200" />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromWishlist(product._id);
                    }}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-all duration-200 z-10"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="text-destructive" size={20} />
                  </button>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3
                    className="text-lg font-semibold text-grey-900 mb-2 cursor-pointer hover:text-primary transition-colors duration-200"
                    onClick={() => navigate(`/product/${product._id}`)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-grey-500 text-sm mb-3 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-grey-900">${product.price}</span>
                    <span className="text-sm text-grey-500 capitalize">{product.category}</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/product/${product._id}`)}
                      className="flex-1 bg-white border border-grey-300 text-grey-700 px-4 py-2 rounded-lg hover:bg-grey-100 hover:border-primary transition-all duration-200 font-medium"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {wishlist.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-grey-500">
              You have <span className="font-semibold text-grey-900">{wishlist.length}</span>{" "}
              {wishlist.length === 1 ? "item" : "items"} in your wishlist
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
