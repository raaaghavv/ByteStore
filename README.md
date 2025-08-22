# E-Commerce Frontend - Whatbytes Assignment

A modern, responsive e-commerce storefront built with Next.js and Tailwind CSS. This project showcases a complete user journey from browsing and filtering products to managing a shopping cart.

---

## 🚀 Live Demo & Preview

- [**Live Site**](https://bytes-store.vercel.app/)
- [**Video Walkthrough**](https://youtu.be/KE9wjJIel68?feature=shared)

![E-Commerce Store Screenshot](/public/screenshot.png)
_A screenshot of the main product listing page._

---

## ✨ Features

This application is packed with features designed to provide a seamless and intuitive shopping experience.

- **Responsive Design:** Fully responsive layout that looks great on desktop, tablet, and mobile devices.
- **Product Listing:** A clean, grid-based display of all available products.
- **Advanced Filtering System:**
  - **Debounced Live Search:** Instantly search for products by title with a debounced input for optimal performance.
  - **Category & Brand Filtering:** Refine the product list by selecting multiple categories and brands.
  - **Price Range Slider:** Dynamically filter products based on a maximum price.
- **URL-Based State:** All active filters (search, category, brand, price) are reflected in the URL, allowing for shareable and bookmarkable links.
- **Dynamic Product Pages:** Each product has its own dedicated, server-rendered page with a unique URL (`/product/[id]`).
- **Image Carousel:** An interactive image gallery on the product detail page.
- **Stateful Shopping Cart:**
  - **Add to Cart:** Add products from both the listing and detail pages.
  - **Quantity Management:** Update item quantities directly in the cart.
  - **Remove Items:** Easily remove products from the cart.
  - **Persistent State:** The cart's contents are saved to `localStorage`, so it persists between sessions.
- **User-Friendly Notifications:** Non-intrusive toast messages for actions like adding items to the cart, powered by `react-hot-toast`.
- **Global State Management:** Uses React Context API with a `useReducer` pattern for robust and predictable state management.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [React Context API](https://react.dev/learn/passing-data-deeply-with-context) (with `useReducer`)
- **Notifications:** [react-hot-toast](https://react-hot-toast.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## ⚙️ Installation and Setup

To run this project locally, follow these simple steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/raaaghavv/ByteStore
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd ByteStore
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    # yarn install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    # yarn dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

The project is organized with a clear and scalable structure:

```
/
├── public/               # Static assets (images)
├── src/
│   ├── app/              # Next.js App Router (home, product, cart pages)
│   ├── components/       # Reusable React components (Header, Sidebar, etc.)
│   ├── context/          # Global state management (CartContext, FilterContext)
│   ├── data/             # Mock data for products
│   └── hooks/            # Custom hooks (useDebounce)
├── .gitignore
├── next.config.mjs
├── package.json
└── README.md
```

---

## 📧 Contact

Raghav Goel – [work.raghav01@gmail.com](mailto:work.raghav01@gmail.com)

Project Link: [https://github.com/raaaghavv/ByteStore](https://github.com/raaaghavv/ByteStore)
