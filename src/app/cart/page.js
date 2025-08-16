"use client";
import { Trash2, Plus, Minus } from "lucide-react";
const cartItems = [];
const CartPage = () => {
  return (
    <main className="flex flex-col max-w-[1440px] min-h-screen mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>

      <div className="flex p-4 sm:p-8 flex-col lg:flex-row gap-12 items-center lg:items-start">
        {/* Cart Items List */}
        <div className="w-full lg:flex-2/3 bg-white p-6 rounded-lg shadow-sm divide-y divide-gray-200">
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:justify-between gap-4 py-6"
                >
                  <div className="flex gap-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-lg font-medium text-gray-900 mt-1">
                        $
                      </p>
                    </div>
                  </div>
                  <div className="flex sm:flex-col sm:items-end justify-between gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-md">
                        <Minus size={16} />
                      </button>
                      <span className="px-4 font-medium">{item.quantity}</span>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-md">
                        <Plus size={16} />
                      </button>
                    </div>
                    {/* Remove Button */}
                    <button className="text-red-500 hover:text-red-700 font-medium text-sm flex items-center gap-1">
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Price Summary */}
        <div className="w-full lg:flex-1/3 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-4">
            Price Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>$</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span>$</span>
            </div>
            <div className="border-t pt-4 mt-4 flex justify-between font-bold text-gray-900 text-lg">
              <span>Total</span>
              <span>$</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-brand text-white py-3 rounded-md font-semibold hover:bg-accent transition-colors text-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
