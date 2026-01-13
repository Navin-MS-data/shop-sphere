import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-sm z-40 transition-all duration-300 border-b border-white/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-black items-center flex">
            <img src="/shop-sphere-icon.svg" alt="Shop Sphere Logo" className="w-8 h-8" />
          </Link>

          <nav className="flex flex-wrap items-center gap-4">
            <Link
              to={"/"}
              className="text-black hover:text-grey-700 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            {user && (
              <Link
                to={"/cart"}
                className="relative group text-black hover:text-grey-700 transition duration-300 ease-in-out"
              >
                <ShoppingCart className="inline-block mr-1 group-hover:text-grey-700" size={20} />
                <span className="hidden sm:inline">Cart</span>
                {cart.length > 0 && (
                  <span
                    className="absolute -top-2 -left-2 bg-black text-white rounded-full px-2 py-0.5
									text-xs group-hover:bg-grey-800 transition duration-300 ease-in-out"
                  >
                    {cart.length}
                  </span>
                )}
              </Link>
            )}
            {isAdmin && (
              <Link
                className="bg-black hover:bg-grey-800 text-white px-3 py-1 rounded-md font-medium
								 transition duration-300 ease-in-out flex items-center shadow-md hover:shadow-lg"
                to={"/secret-dashboard"}
              >
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

            {user ? (
              <button
                className="bg-black hover:bg-grey-800 text-white py-2 px-4
						rounded-md flex items-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                onClick={logout}
              >
                <LogOut size={18} />
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="bg-black hover:bg-grey-800 text-white py-2 px-4
									rounded-md flex items-center transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                >
                  <UserPlus className="mr-2" size={18} />
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="bg-black hover:bg-grey-800 text-white py-2 px-4
									rounded-md flex items-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                >
                  <LogIn className="mr-2" size={18} />
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
