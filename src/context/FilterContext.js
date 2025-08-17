"use client";

import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import mockProducts from "../data/products";
import { useDebounce } from "@/hooks/useDebounce";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State initialized from the URL on first load.
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

  // Debounce the search term to prevent excessive URL updates and re-renders.
  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  // effect syncs the UI state to the URL after changes.
  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedSearchTerm) params.set("search", debouncedSearchTerm);
    selectedCategories.forEach((cat) => params.append("category", cat));
    selectedBrands.forEach((brand) => params.append("brand", brand));
    if (priceRange < 1000) params.set("price", priceRange);

    router.replace(`/?${params.toString()}`);
  }, [
    debouncedSearchTerm,
    selectedCategories,
    selectedBrands,
    priceRange,
    router,
  ]);

  const filteredProducts = useMemo(() => {
    const currentSearch = searchParams.get("search") || "";
    const currentCategories = searchParams.getAll("category");
    const currentBrands = searchParams.getAll("brand");
    const currentPrice = Number(searchParams.get("price")) || 1000;

    return mockProducts.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(currentSearch.toLowerCase());
      const matchesCategory =
        currentCategories.length === 0 ||
        currentCategories.includes(product.category);
      const matchesBrand =
        currentBrands.length === 0 || currentBrands.includes(product.brand);
      const matchesPrice = product.price <= currentPrice;

      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });
  }, [searchParams]); // makes URL the single source of truth for filtered data

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
