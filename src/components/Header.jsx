"use client";
import Link from "next/link";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useFilter } from "@/context/FilterContext";
import { Search } from "lucide-react";

const Header = () => {
  const { cartItems } = useCart();
  const { searchTerm, setSearchTerm } = useFilter();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 flex items-center justify-center bg-brand w-full z-50">
      <div className="flex items-center justify-between max-w-[1440px] w-full mx-4 sm:mx-6 py-4">
        <Link href={"/"} className="text-white text-3xl font-bold px-3 py-1">
          Logo
        </Link>

        <div className="relative w-5/12">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white opacity-70 pointer-events-none">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-2 py-2.5 rounded-lg border border-white/70 text-white text-sm bg-transparent focus:outline-none w-full"
          />
        </div>
        <Link
          href={"/cart"}
          className="bg-accent text-white px-4 sm:px-6 py-2.5 rounded flex items-center gap-1 whitespace-nowrap"
        >
          🛒 Cart
          {totalItems > 0 ? (
            <sup>
              <span className=" bg-red-500 text-white text-center rounded-full aspect-square px-1.5 py-1">
                {totalItems}
              </span>
            </sup>
          ) : (
            ""
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
