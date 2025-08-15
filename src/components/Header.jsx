import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-brand">
      <div className="flex items-center justify-between max-w-[1440px] w-full mx-4 sm:mx-6 py-4">
        <div className="text-white text-3xl font-bold px-3 py-1">Logo</div>

        <input
          type="text"
          placeholder="Search for products..."
          className="min-w-25 w-5/12 px-2 py-2.5 rounded-lg border border-white/70 text-white text-sm bg-transparent focus:outline-none"
        />
        <button className="bg-accent text-white px-4 sm:px-6 py-2.5 rounded flex items-center gap-1 whitespace-nowrap">
          🛒 Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
