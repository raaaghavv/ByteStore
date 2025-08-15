import React from "react";

const ProductCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-3 justify-between">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded"
      />

      {/* Title & Price */}
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{product.title}</h3>
        <p className="font-semibold">${product.price}</p>
      </div>

      {/* Add to Cart Button */}
      <button
        className=" bg-brand text-white px-4 py-2 rounded-xl hover:bg-accent"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
