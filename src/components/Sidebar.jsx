"use client";
import React, { useState } from "react";
import { useFilter } from "@/context/FilterContext";
import mockProducts from "@/data/products";

const Sidebar = () => {
  const {
    selectedCategories,
    handleCategoryChange,
    selectedBrands,
    handleBrandChange,
    priceRange,
    setPriceRange,
  } = useFilter();

  const categories = [...new Set(mockProducts.map((prod) => prod.category))];
  const brands =
    selectedCategories.length > 0
      ? [
          ...new Set(
            mockProducts
              .filter((prod) => selectedCategories.includes(prod.category))
              .map((prod) => prod.brand)
          ),
        ]
      : [];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-brand p-4 rounded-xl w-full sm:w-1/5 min-w-50 sm:h-fit sm:block">
      <button
        className="sm:hidden text-white p-2 rounded w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide Filters" : "Show Filters"}
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:block text-white space-y-5`}
      >
        <h2 className="text-white text-2xl font-bold">Filters</h2>
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <div className="space-y-1">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-white"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          <input
            type="range"
            min={0}
            max={1000}
            step={100}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full accent-white"
          />
          <p className="text-sm">Up to ${priceRange}</p>
        </div>
        {brands.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Brands</h3>
            <div className="space-y-1">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-white"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
