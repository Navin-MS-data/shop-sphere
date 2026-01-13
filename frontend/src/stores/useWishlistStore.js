import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

export const useWishlistStore = create((set, get) => ({
  wishlist: [],
  loading: false,

  getWishlistItems: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("/wishlist");
      set({ wishlist: res.data, loading: false });
    } catch (error) {
      set({ wishlist: [], loading: false });
      console.error("Error fetching wishlist:", error);
    }
  },

  addToWishlist: async (product) => {
    try {
      await axios.post("/wishlist", { productId: product._id });
      toast.success("Added to wishlist");

      set((prevState) => {
        const existingItem = prevState.wishlist.find((item) => item._id === product._id);
        if (existingItem) {
          return prevState;
        }
        return { wishlist: [...prevState.wishlist, product] };
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add to wishlist");
    }
  },

  removeFromWishlist: async (productId) => {
    try {
      await axios.delete(`/wishlist`, { data: { productId } });
      toast.success("Removed from wishlist");
      set((prevState) => ({
        wishlist: prevState.wishlist.filter((item) => item._id !== productId),
      }));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to remove from wishlist");
    }
  },

  isInWishlist: (productId) => {
    const { wishlist } = get();
    return wishlist.some((item) => item._id === productId);
  },

  clearWishlist: () => {
    set({ wishlist: [] });
  },
}));
