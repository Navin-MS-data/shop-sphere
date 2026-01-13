import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/shop-sphere-icon.svg" alt="Shop Sphere Logo" className="w-8 h-8" />
              <h3 className="text-xl font-bold">Shop Sphere</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your premier destination for eco-friendly fashion. Discover the latest trends in sustainable style.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Wishlist
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/jeans" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Jeans
                </Link>
              </li>
              <li>
                <Link to="/category/t-shirts" className="text-gray-400 hover:text-white transition-colors duration-200">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/category/shoes" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/category/jackets" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Jackets
                </Link>
              </li>
              <li>
                <Link to="/category/bags" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Bags
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>123 Fashion Street, Style City, SC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:info@shopsphere.com" className="hover:text-white transition-colors duration-200">
                  info@shopsphere.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Shop Sphere. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
