import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import WishlistPage from "./pages/WishlistPage";
import AboutPage from "./pages/AboutPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import CartPage from "./pages/CartPage";
import { useCartStore } from "./stores/useCartStore";
import { useWishlistStore } from "./stores/useWishlistStore";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage";
import PurchaseCancelPage from "./pages/PurchaseCancelPage";

function App() {
  const { user, checkAuth, checkingAuth } = useUserStore();
  const { getCartItems } = useCartStore();
  const { getWishlistItems } = useWishlistStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!user) return;

    getCartItems();
    getWishlistItems();
  }, [getCartItems, getWishlistItems, user]);

  if (checkingAuth) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-background text-text relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(245,245,245,0.8)_0%,rgba(255,255,255,0.5)_45%,rgba(255,255,255,0)_100%)]" />
        </div>
      </div>

      <div className="relative z-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={
              !user ? (
                <div className="pt-20">
                  <SignUpPage />
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !user ? (
                <div className="pt-20">
                  <LoginPage />
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/secret-dashboard"
            element={
              user?.role === "admin" ? (
                <div className="pt-20">
                  <AdminPage />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/about"
            element={
              <div className="pt-20">
                <AboutPage />
              </div>
            }
          />
          <Route
            path="/category/:category"
            element={
              <div className="pt-20">
                <CategoryPage />
              </div>
            }
          />
          <Route
            path="/product/:id"
            element={
              <div className="pt-20">
                <ProductPage />
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              user ? (
                <div className="pt-20">
                  <CartPage />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/wishlist"
            element={
              user ? (
                <div className="pt-20">
                  <WishlistPage />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/purchase-success"
            element={
              user ? (
                <div className="pt-20">
                  <PurchaseSuccessPage />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/purchase-cancel"
            element={
              user ? (
                <div className="pt-20">
                  <PurchaseCancelPage />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
