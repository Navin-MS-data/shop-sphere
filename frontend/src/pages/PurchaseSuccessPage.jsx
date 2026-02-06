import { ArrowRight, CheckCircle, HandHeart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import axios from "../lib/axios";
import Confetti from "react-confetti";

const PurchaseSuccessPage = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const { clearCart } = useCartStore();
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleCheckoutSuccess = async (sessionId) => {
      try {
        await axios.post("/payments/checkout-success", {
          sessionId,
        });
        clearCart();
      } catch (error) {
        console.log(error);
      } finally {
        setIsProcessing(false);
      }
    };

    const sessionId = new URLSearchParams(window.location.search).get("session_id");
    if (sessionId) {
      handleCheckoutSuccess(sessionId);
    } else {
      setIsProcessing(false);
      setError("No session ID found in the URL");
    }
  }, [clearCart]);

  if (isProcessing) return <div className="text-grey-900 text-center py-8">Processing...</div>;

  if (error) return <div className="text-destructive text-center py-8">Error: {error}</div>;

  return (
    <div className="h-screen flex items-center justify-center px-4">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        gravity={0.1}
        style={{ zIndex: 99 }}
        numberOfPieces={700}
        recycle={false}
      />

      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden relative z-10 border border-grey-200">
        <div className="p-6 sm:p-8">
          <div className="flex justify-center">
            <CheckCircle className="text-secondary w-16 h-16 mb-4" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-grey-900 mb-2">
            Purchase Successful!
          </h1>

          <p className="text-grey-800 text-center mb-2">
            Thank you for your order. {"We're"} processing it now.
          </p>
          <p className="text-grey-500 text-center text-sm mb-6">
            Check your email for order details and updates.
          </p>
          <div className="bg-grey-50 rounded-lg p-4 mb-6 border border-grey-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-grey-500">Order number</span>
              <span className="text-sm font-semibold text-grey-900">#12345</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-grey-500">Estimated delivery</span>
              <span className="text-sm font-semibold text-grey-900">3-5 business days</span>
            </div>
          </div>

          <div className="space-y-4">
            <button
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4
             rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <HandHeart className="mr-2" size={18} />
              Thanks for trusting us!
            </button>
            <Link
              to={"/"}
              className="w-full bg-white hover:bg-grey-50 text-grey-900 font-bold py-2 px-4
            rounded-lg transition duration-300 flex items-center justify-center border border-grey-300 hover:shadow-md"
            >
              Continue Shopping
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PurchaseSuccessPage;
