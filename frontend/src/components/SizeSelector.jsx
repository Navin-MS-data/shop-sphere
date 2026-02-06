import { useState } from "react";

const SizeSelector = ({ sizes = ["XS", "S", "M", "L", "XL", "XXL"], selectedSize, onSizeChange }) => {
  const [activeSize, setActiveSize] = useState(selectedSize || "");

  const handleSizeClick = (size) => {
    setActiveSize(size);
    if (onSizeChange) {
      onSizeChange(size);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold text-grey-900 mb-3">Select Size</h3>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`px-6 py-3 rounded-lg border-2 font-semibold transition-all duration-200 shadow-sm hover:shadow-md ${
              activeSize === size
                ? "border-primary bg-primary text-white"
                : "border-grey-300 bg-white text-grey-700 hover:border-primary hover:bg-grey-50"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      {activeSize && (
        <p className="mt-3 text-sm text-grey-500">
          Selected size: <span className="font-semibold text-grey-900">{activeSize}</span>
        </p>
      )}
    </div>
  );
};

export default SizeSelector;
