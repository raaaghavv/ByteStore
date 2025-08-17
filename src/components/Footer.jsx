import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-white mx-auto">
      <div className="max-w-[1440px] mx-auto p-6 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Filters</h3>
          <ul className="flex gap-6">
            <li>All</li>
            <li>Elzezronk</li>
          </ul>
          <p className="mt-4 text-sm text-white/70">© 2024 American</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">About Us</h3>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex items-center gap-3">
            <a className="bg-brand p-2 rounded-full hover:bg-brand/80">
              <Facebook size={18} />
            </a>
            <a className="bg-brand p-2 rounded-full hover:bg-brand/80">
              <Twitter size={18} />
            </a>
            <a className="bg-brand p-2 rounded-full hover:bg-brand/80">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
