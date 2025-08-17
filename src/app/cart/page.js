"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, checkOutCart } = useCart();

  const checkOut = () => {
    checkOutCart();
    toast.success("Order Placed Successfully");
  };

  // Calculate total price
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // By default shipping to free
  let shipping = 0;

  if (subtotal > 0 && subtotal <= 500) {
    shipping = 40;
  }
  const total = subtotal + shipping;

  return (
    <main className="flex flex-col max-w-[1440px] min-h-screen mx-auto p-4 sm:p-6 lg:p-8">
      {cartItems.length === 0 ? (
        // Empty cart page
        <div className="flex flex-col gap-8 text-center mt-16">
          <p className="text-gray-600 text-4xl">Your cart is empty.</p>
          <Link
            href="/"
            className="text-xl bg-brand hover:bg-accent rounded-lg py-4 text-white max-w-md mx-auto w-full"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        // Cart when items
        <>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Cart list */}
            <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-sm">
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:justify-between gap-4 py-6"
                  >
                    <Link href={`/product/${item.id}`} className="flex gap-5">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        height={500}
                        width={500}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-900 mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </Link>
                    <div className="flex sm:flex-col sm:items-end justify-between gap-4">
                      {/* Quantity control */}
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-md disabled:opacity-50"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-md"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Remove button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 font-medium text-sm flex items-center gap-1"
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price summary */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-4">
                Price Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t pt-4 mt-4 flex justify-between font-bold text-gray-900 text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={checkOut}
                className="w-full mt-6 bg-brand text-white py-3 rounded-md font-semibold hover:bg-accent transition-colors text-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
};

export default CartPage;
