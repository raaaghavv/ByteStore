"use client";

import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import mockProducts from "../data/products"; 

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1. All state is now managed here
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.getAll("category") || []
  );
  const [selectedBrands, setSelectedBrands] = useState(
    searchParams.getAll("brand") || []
  );
  const [priceRange, setPriceRange] = useState(
    Number(searchParams.get("price")) || 1000
  );

  // 2. The URL synchronization effect is now here
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    selectedCategories.forEach((cat) => params.append("category", cat));
    selectedBrands.forEach((brand) => params.append("brand", brand));
    if (priceRange < 1000) params.set("price", priceRange);

    router.replace(`/?${params.toString()}`);
  }, [searchTerm, selectedCategories, selectedBrands, priceRange, router]);

  // 3. The filtering logic (useMemo) is now here
  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice = product.price <= priceRange;

      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });
  }, [searchTerm, selectedCategories, selectedBrands, priceRange]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const value = {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    handleCategoryChange,
    selectedBrands,
    handleBrandChange,
    priceRange,
    setPriceRange,
    filteredProducts,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
