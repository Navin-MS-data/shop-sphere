import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="rounded-lg border p-4 shadow-md border-grey-300 bg-white md:p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <div className="shrink-0 md:order-1">
          <img className="h-20 md:h-32 rounded object-cover" src={item.image} alt={item.name} />
        </div>
        <label className="sr-only">Choose quantity:</label>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center gap-2">
            <button
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
               border-grey-300 bg-white hover:bg-primary hover:text-white hover:border-primary focus:outline-none focus:ring-2
                focus:ring-primary-200 transition-all duration-200"
              onClick={() => updateQuantity(item._id, item.quantity - 1)}
            >
              <Minus className="text-grey-600" size={14} />
            </button>
            <p className="text-grey-900 font-medium">{item.quantity}</p>
            <button
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
               border-grey-300 bg-white hover:bg-primary hover:text-white hover:border-primary focus:outline-none
              focus:ring-2 focus:ring-primary-200 transition-all duration-200"
              onClick={() => updateQuantity(item._id, item.quantity + 1)}
            >
              <Plus className="text-grey-600" size={14} />
            </button>
            <button
              className="inline-flex items-center ml-6 text-grey-500
               hover:text-destructive transition-all duration-200"
              onClick={() => removeFromCart(item._id)}
            >
              <Trash size={16} />
            </button>
          </div>

          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-grey-900">${item.price}</p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <p className="text-base font-medium text-grey-900 hover:text-primary hover:underline">
            {item.name}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
