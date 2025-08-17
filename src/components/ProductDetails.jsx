"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = ({ product, className }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success("Added to Cart");
  };
  return (
    <section className={className}>
      {/* product description */}
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight ">
        {product.title}
      </h1>

      <p className="text-sm text-gray-600 ">
        <span className="font-medium">Category:</span> {product.category}
      </p>

      <p className="text-gray-700 leading-relaxed ">{product.description}</p>

      <p className="text-3xl font-semibold text-gray-800 ">
        ${product.price.toFixed(2)}
      </p>

      {/* quantity selector */}
      <div className="flex items-center gap-3">
        <label htmlFor="quantity" className=" font-medium text-gray-700">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          min="1"
          max="10"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border border-gray-300 rounded-md py-2 px-3 text-center"
        />
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-brand text-white py-3 px-6 rounded-md font-semibold hover:bg-accent transition-colors text-lg"
      >
        Add to Cart
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default ProductDetails;
