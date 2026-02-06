import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const stores = ["Bengaluru", "Chennai", "Coimbatore", "Hyderabad", "Cochin", "Mumbai"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-grey-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/shop-sphere-icon.svg" alt="Shop Sphere Logo" className="w-7 h-7" />
              <h3 className="text-lg font-bold">Shop Sphere</h3>
            </div>
            <p className="text-grey-400 mb-3 text-xs leading-relaxed">
              Your premier destination for eco-friendly fashion. Discover the latest trends in
              sustainable style.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h3 className="text-base font-semibold mb-3">Shop</h3>
            <ul className="space-y-1.5">
              <li>
                <Link
                  to="/category/jeans"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Jeans
                </Link>
              </li>
              <li>
                <Link
                  to="/category/t-shirts"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link
                  to="/category/shoes"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  to="/category/jackets"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Jackets
                </Link>
              </li>
              <li>
                <Link
                  to="/category/bags"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Bags
                </Link>
              </li>
              <li>
                <Link
                  to="/category/glasses"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Glasses
                </Link>
              </li>
              <li>
                <Link
                  to="/category/suits"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Suits
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-base font-semibold mb-3">Customer Service</h3>
            <ul className="space-y-1.5">
              <li>
                <Link
                  to="/"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/wishlist"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  About Us
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-grey-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Stores */}
          <div>
            <h3 className="text-base font-semibold mb-3">Get In Touch</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-grey-400 text-xs">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>123 Fashion Street, Style City, SC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-grey-400 text-xs">
                <Phone size={16} className="flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2 text-grey-400 text-xs">
                <Mail size={16} className="flex-shrink-0" />
                <a
                  href="mailto:info@shopsphere.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@shopsphere.com
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="text-xs font-semibold mb-2">Our Stores</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {stores.map((store, index) => (
                  <span key={index} className="text-grey-400 text-[10px]">
                    • {store}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-grey-800 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-grey-400 text-xs text-center md:text-left">
              © {currentYear} Shop Sphere. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <a href="#" className="text-grey-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-grey-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-grey-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="#" className="text-grey-400 hover:text-white transition-colors duration-200">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary-dark text-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          aria-label="Back to top"
        >
          <ArrowUp
            size={20}
            className="group-hover:translate-y-[-2px] transition-transform duration-200"
          />
        </button>
      )}
    </footer>
  );
};

export default Footer;
