import { Suspense } from "react";
import HomePage from "@/components/HomePage";
import { FilterProvider } from "@/context/FilterContext";

export default function Home() {
  return (
    <Suspense
      fallback={<div className="text-center p-8">Loading products...</div>}
    >
      <FilterProvider>
        <HomePage />
      </FilterProvider>
    </Suspense>
  );
}
