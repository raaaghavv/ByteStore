"use client";
import React, { useState } from "react";

const Sidebar = ({
  categories,
  brands,
  priceRange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-brand p-4 rounded-xl w-full sm:w-64 sm:h-fit sm:block">
      {/* Mobile Toggle */}
      <button
        className="sm:hidden mb-4 bg-brand text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Filters Container */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:block text-white space-y-5`}
      >
        <h2 className="text-white text-2xl font-bold">Filters</h2>

        {/* Category Filter */}
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <div className="space-y-1">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-white"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          <input
            type="range"
            min={0}
            max={5000}
            step={100}
            className="w-full accent-white"
          />
          <p className="text-sm">Up to ₹{priceRange}</p>
        </div>

        {/* Brand Filter (Optional) */}
        {brands?.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Brands</h3>
            <div className="space-y-1">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-brand"
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
