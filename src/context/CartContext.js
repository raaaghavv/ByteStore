"use client";
import { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
  cartItems: [],
};

const CartContext = createContext();

const MAX_QUANTITY = 10;

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_CART":
      return { ...state, cartItems: action.payload };

    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // If item exists, calculate the new quantity
        const potentialQuantity =
          existingItem.quantity + action.payload.quantity;

        // Cap the quantity at the max limit
        const newQuantity = Math.min(potentialQuantity, MAX_QUANTITY);

        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: newQuantity }
              : item
          ),
        };
      } else {
        // If item is new, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    }

    case "UPDATE_QUANTITY": {
      // Cap the incoming quantity at the max limit
      const newQuantity = Math.min(action.payload.quantity, MAX_QUANTITY);

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: newQuantity }
            : item
        ),
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "CHECKOUT_CART":
      return {
        cartItems: [],
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        dispatch({ type: "INITIALIZE_CART", payload: JSON.parse(storedCart) });
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  // Define the context value
  const value = {
    cartItems: state.cartItems,
    addToCart: (product, quantity = 1) => {
      dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
    },
    updateQuantity: (id, quantity) => {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    },
    removeFromCart: (id) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    },
    checkOutCart: () => {
      dispatch({ type: "CHECKOUT_CART" });
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
