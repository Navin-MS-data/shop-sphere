import { ShoppingCart, LogIn, LogOut, Lock, Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div
        className="flex items-center justify-between gap-3 px-5 py-2.5
        bg-white/30 backdrop-blur-2xl backdrop-saturate-200
        border border-white/50
        shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.4)]
        rounded-2xl transition-all duration-500"
      >
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-grey-900 flex items-center gap-2 shrink-0">
          <img src="/shop-sphere-icon.svg" alt="Shop Sphere Logo" className="w-7 h-7" />
          <span className="hidden sm:inline">Shop Sphere</span>
        </Link>

        {/* Nav Icons */}
        <nav className="flex items-center gap-1">
          <DockIcon to="/" title="Home">
            <Home size={18} />
          </DockIcon>

          {user && (
            <>
              <DockIcon to="/wishlist" title="Wishlist">
                <Heart size={18} />
              </DockIcon>

              <DockIcon to="/cart" title="Cart" badge={cart.length} badgeColor="bg-primary">
                <ShoppingCart size={18} />
              </DockIcon>
            </>
          )}

          {isAdmin && (
            <DockIcon to="/secret-dashboard" title="Dashboard">
              <Lock size={18} />
            </DockIcon>
          )}

          <div className="w-px h-6 bg-grey-200 mx-1 shrink-0" />

          {user ? (
            <button
              onClick={logout}
              className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium
                text-white bg-primary/90 hover:bg-primary
                transition-all duration-300 ease-out
                hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95"
              title="Log Out"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          ) : (
            <Link
              to="/login"
              className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium
                text-white bg-primary/90 hover:bg-primary
                transition-all duration-300 ease-out
                hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95"
              title="Login"
            >
              <LogIn size={16} />
              <span className="hidden sm:inline">Login</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

/* ─── Dock Icon Button ───────────────────────────── */
const DockIcon = ({ to, title, badge, badgeColor = "bg-accent", children }) => {
  return (
    <Link
      to={to}
      title={title}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl
        text-black hover:text-primary
        hover:bg-primary/10
        transition-all duration-300 ease-out
        hover:scale-110 active:scale-95"
    >
      {children}
      {badge > 0 && (
        <span
          className={`absolute -top-1 -right-1 ${badgeColor} text-white text-[10px] font-bold
            min-w-[18px] h-[18px] flex items-center justify-center
            rounded-full px-1 shadow-sm
            animate-[bounce-in_0.3s_ease-out]`}
        >
          {badge}
        </span>
      )}
    </Link>
  );
};
