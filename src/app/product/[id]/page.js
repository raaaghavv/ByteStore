"use client";

import { useParams } from "next/navigation";
import mockProducts from "../../../data/products";
import { Star } from "lucide-react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === Number(id));


  if (!product) {
    return (
      <div className="p-6 text-center flex items-center justify-center min-h-screen">
        <h2 className="text-lg font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center min-h-screen">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Details Section */}
      <div className="">
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-xl text-blue-600 font-semibold mb-4">
          ${product.price}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-3 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
              />
            ))}
            <span className="text-gray-600 text-sm">
              {product.rating.toFixed(1)}
            </span>
          </div>
        )}

        {/* Description */}
        {product.description && (
          <p className="text-gray-700 mb-4">{product.description}</p>
        )}

        {/* Category */}
        {product.category && (
          <p className="text-sm text-gray-500 mb-4">
            Category: {product.category}
          </p>
        )}

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mb-4">
          <label className="text-sm font-medium">Quantity:</label>
          <input
            type="number"
            min={1}
            className="w-16 border rounded px-2 py-1"
          />
        </div>

        {/* Add to Cart Button */}
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          onClick={() =>
            console.log("Added to cart:", { ...product, quantity })
          }
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductDetailPage;
