"use client";
import React, { Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import { useFilter } from "@/context/FilterContext";

export default function Home() {
  const { filteredProducts } = useFilter();

  return (
    <main className="flex flex-col max-w-[1440px] mx-auto p-4 sm:p-6 sm:flex-row gap-6 min-h-screen relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar />
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-4">Product Listing</h2>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No products found matching your criteria.
            </p>
          )}
        </div>
      </Suspense>
    </main>
  );
}
