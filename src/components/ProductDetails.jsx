"use client";
import { useState } from "react";

const ProductDetails = ({ product, className }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <section className={className}>
        
      {/* product description */}
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight ">
        {product.title}
      </h1>

      <p className="text-sm text-gray-500 ">
        <span className="font-medium text-gray-600">Category:</span>{" "}
        {product.category}
      </p>

      <p className="text-gray-700 leading-relaxed ">
        {product.description} desc.
      </p>

      <p className="text-3xl font-semibold text-gray-800 ">
        ${product.price.toFixed(2)}
      </p>

      {/* quantity selector */}
      <div className="flex items-center gap-3">
        <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-20 border border-gray-300 rounded-md py-2 px-3 text-center focus:ring-2 focus:ring-gray-800"
        />
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-brand text-white py-3 px-6 rounded-md font-semibold hover:bg-accent transition-colors text-lg">
        Add to Cart
      </button>
    </section>
  );
};

export default ProductDetails;
