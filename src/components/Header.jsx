"use client";
import Link from "next/link";
import React from "react";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className="sticky top-0 flex items-center justify-center bg-brand w-full z-90">
      <div className="flex items-center justify-between max-w-[1440px] w-full mx-4 sm:mx-6 py-4">
        <Link href={"/"} className="text-white text-3xl font-bold px-3 py-1">
          Logo
        </Link>

        <input
          type="text"
          placeholder="Search for products..."
          className="min-w-25 w-5/12 px-2 py-2.5 rounded-lg border border-white/70 text-white text-sm bg-transparent focus:outline-none"
        />
        <Link
          href={"/cart"}
          className="bg-accent text-white px-4 sm:px-6 py-2.5 rounded flex items-center gap-1 whitespace-nowrap"
        >
          🛒 Cart
          <sup>
            <span className=" bg-red-500 text-white text-center rounded-full aspect-square px-1.5 py-1">
              {totalItems > 0 ? totalItems : ""}
            </span>
          </sup>
        </Link>
      </div>
    </header>
  );
};

export default Header;
