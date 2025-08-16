"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import mockProducts from "../data/products";

export default function Home() {
  const [products] = useState(mockProducts);

  return (
    <main className="flex flex-col max-w-[1440px] mx-auto p-4 sm:p-6 sm:flex-row gap-6 min-h-screen relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Product Grid */}
      <div className="flex-1">
        <h2 className="text-lg font-bold mb-4">Product Listing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
