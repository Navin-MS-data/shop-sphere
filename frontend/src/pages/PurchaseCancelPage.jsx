import { XCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PurchaseCancelPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden relative z-10 border border-grey-200"
      >
        <div className="p-6 sm:p-8">
          <div className="flex justify-center">
            <XCircle className="text-destructive w-16 h-16 mb-4" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-destructive mb-2">
            Purchase Cancelled
          </h1>
          <p className="text-grey-500 text-center mb-6">
            Your order has been cancelled. No charges have been made.
          </p>
          <div className="bg-grey-50 rounded-lg p-4 mb-6 border border-grey-200">
            <p className="text-sm text-grey-500 text-center">
              If you encountered any issues during the checkout process, please don&apos;t hesitate
              to contact our support team.
            </p>
          </div>
          <div className="space-y-4">
            <Link
              to={"/"}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="mr-2" size={18} />
              Return to Shop
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PurchaseCancelPage;
