import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to Cart");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-3 justify-between">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.images[0]}
          alt={product.title}
          width={500}
          height={300}
          className="w-full h-60 object-contain rounded cursor-pointer"
        />
        <div className="space-y-1 mt-3">
          <h3 className="text-sm font-medium">{product.title}</h3>
          <p className="font-semibold">${product.price}</p>
        </div>
      </Link>

      <button
        onClick={handleAddToCart}
        className="bg-brand text-white px-4 py-2 rounded-xl hover:bg-accent"
      >
        Add to Cart
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ProductCard;
