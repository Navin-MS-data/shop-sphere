import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="rounded-lg border p-4 shadow-md border-grey-300 bg-white md:p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 md:hidden">
        {/* Image and Name Row */}
        <div className="flex gap-4">
          <img
            className="h-20 w-20 rounded object-cover flex-shrink-0"
            src={item.image}
            alt={item.name}
          />
          <div className="flex-1 min-w-0">
            <p className="text-base font-medium text-grey-900 line-clamp-2">{item.name}</p>
            <p className="text-lg font-bold text-grey-900 mt-2">₹{item.price}</p>
          </div>
        </div>

        {/* Quantity Controls and Delete Button Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border
               border-grey-300 bg-white hover:bg-primary hover:text-white hover:border-primary focus:outline-none focus:ring-2
                focus:ring-primary-200 transition-all duration-200"
              onClick={() => updateQuantity(item._id, item.quantity - 1)}
            >
              <Minus className="text-grey-600 hover:text-white" size={16} />
            </button>
            <p className="text-grey-900 font-medium min-w-[30px] text-center">{item.quantity}</p>
            <button
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border
               border-grey-300 bg-white hover:bg-primary hover:text-white hover:border-primary focus:outline-none
              focus:ring-2 focus:ring-primary-200 transition-all duration-200"
              onClick={() => updateQuantity(item._id, item.quantity + 1)}
            >
              <Plus className="text-grey-600 hover:text-white" size={16} />
            </button>
          </div>

          <button
            className="inline-flex items-center gap-2 px-4 py-2 text-grey-500
             hover:text-destructive hover:bg-destructive/10 rounded-lg transition-all duration-200"
            onClick={() => removeFromCart(item._id)}
          >
            <Trash size={18} />
            <span className="text-sm font-medium">Remove</span>
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex md:items-center md:justify-between md:gap-6">
        <div className="shrink-0 md:order-1">
          <img className="h-32 rounded object-cover" src={item.image} alt={item.name} />
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <p className="text-base font-medium text-grey-900 hover:text-primary hover:underline">
            {item.name}
          </p>
        </div>

        <div className="flex items-center md:order-3 md:justify-end gap-6">
          <div className="flex items-center gap-2">
            <button
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
               border-grey-300 bg-white hover:bg-primary hover:text-white hover:border-primary focus:outline-none focus:ring-2
                focus:ring-primary-200 transition-all duration-200"
              onClick={() => updateQuantity(item._id, item.quantity - 1)}
            >
              <Minus className="text-grey-600" size={14} />
            </button>
            <p className="text-grey-900 font-medium min-w-[30px] text-center">{item.quantity}</p>
            <button
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
               border-grey-300 bg-white hover:bg-primary hover:text-white hover:border-primary focus:outline-none
              focus:ring-2 focus:ring-primary-200 transition-all duration-200"
              onClick={() => updateQuantity(item._id, item.quantity + 1)}
            >
              <Plus className="text-grey-600" size={14} />
            </button>
          </div>

          <button
            className="inline-flex items-center text-grey-500
             hover:text-destructive transition-all duration-200"
            onClick={() => removeFromCart(item._id)}
          >
            <Trash size={16} />
          </button>

          <div className="text-end md:w-32">
            <p className="text-base font-bold text-grey-900">₹{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
