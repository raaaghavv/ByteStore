const mockProducts = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    description:
      "Experience ultimate comfort and performance with our latest running shoes, designed for both casual joggers and serious marathoners.",
    images: [
      "/NIKE+VOMERO+PLUS-1.avif",
      "/NIKE+VOMERO+PLUS-2.avif",
      "/NIKE+VOMERO+PLUS-3.avif",
      "/NIKE+VOMERO+PLUS-4.avif",
    ],
    category: "Sportswear",
    brand: "Nike",
    reviewData: {
      averageRating: 4.8,
      totalReviews: 215,
      reviews: [
        {
          id: 101,
          name: "Alex Johnson",
          date: "15 Jul, 2025",
          rating: 5,
          text: "Incredibly comfortable and lightweight. Perfect for my daily runs!",
        },
        {
          id: 102,
          name: "Maria Garcia",
          date: "02 Aug, 2025",
          rating: 4,
          text: "Great shoes, very stylish. A little tight at first but they broke in nicely.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 199,
    description:
      "Immerse yourself in crystal-clear audio with these noise-cancelling wireless headphones. Long-lasting battery for all-day reviewening.",
    images: [
      "/airpod_max_blue-1.jpg",
      "/airpod_max_blue-2.jpg",
      "/airpod_max_blue-3.jpg",
      "/airpod_max_blue-4.jpg",
    ],
    category: "Electronics",
    brand: "Apple",
    reviewData: {
      averageRating: 4.6,
      totalReviews: 352,
      reviews: [
        {
          id: 201,
          name: "Ben Carter",
          date: "20 Jun, 2025",
          rating: 5,
          text: "The noise cancellation is top-notch. Sound quality is amazing for the price.",
        },
        {
          id: 202,
          name: "Chloe Davis",
          date: "11 Jul, 2025",
          rating: 4,
          text: "Very comfortable to wear for long periods. Battery life is excellent.",
        },
        {
          id: 203,
          name: "Sam Miller",
          date: "01 Aug, 2025",
          rating: 5,
          text: "Pairs instantly with my phone. The audio is crisp and clear. Highly recommend!",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    description:
      "A durable and spacious backpack with multiple compartments to keep your belongings organized and secure. Ideal for work, travel, or school.",
    images: ["/wildcraft-1.webp", "/wildcraft-2.webp", "/wildcraft-3.webp"],
    category: "Accessories",
    brand: "Wildcraft",
    reviewData: {
      averageRating: 4.9,
      totalReviews: 180,
      reviews: [
        {
          id: 301,
          name: "Olivia White",
          date: "05 May, 2025",
          rating: 5,
          text: "So much space and very durable material. The laptop sleeve is a huge plus. Best backpack I've owned.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    description:
      "Track your fitness, receive notifications, and stay connected with this sleek and powerful smartwatch.",
    images: [
      "/galaxy-watch-ultra-1.avif",
      "/galaxy-watch-ultra-2.avif",
      "/galaxy-watch-ultra-3.avif",
    ],
    category: "Electronics",
    brand: "Samsung",
    reviewData: {
      averageRating: 4.5,
      totalReviews: 412,
      reviews: [
        {
          id: 401,
          name: "James Lee",
          date: "18 Jul, 2025",
          rating: 5,
          text: "The fitness tracking is incredibly accurate. Seamless integration with my phone.",
        },
        {
          id: 402,
          name: "Priya Sharma",
          date: "22 Jul, 2025",
          rating: 4,
          text: "Love the design and the display is very bright. Wish the battery lasted a bit longer.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    description:
      "Protect your eyes with style. These classic sunglasses offer 100% UV protection and a timeless design.",
    images: ["/sunglasses-1.png", "/sunglasses-2.png", "/sunglasses-3.png"],
    category: "Accessories",
    brand: "Ray-Ban",
    reviewData: {
      averageRating: 4.7,
      totalReviews: 289,
      reviews: [
        {
          id: 501,
          name: "Ethan Wilson",
          date: "10 Jun, 2025",
          rating: 5,
          text: "Classic style and perfect fit. The lens quality is excellent.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    description:
      "Capture your memories in stunning detail with this easy-to-use digital camera, featuring a powerful zoom and 4K video recording.",
    images: [
      "/camera-1.avif",
      "/camera-2.avif",
      "/camera-3.avif",
      "/camera-4.avif",
    ],
    category: "Electronics",
    brand: "Sony",
    reviewData: {
      averageRating: 4.4,
      totalReviews: 156,
      reviews: [
        {
          id: 601,
          name: "Sophia Brown",
          date: "01 Jul, 2025",
          rating: 4,
          text: "Takes beautiful photos, especially in good lighting. It's a bit complex for a beginner, but I'm learning.",
        },
      ],
    },
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    description:
      "A soft, comfortable, and versatile t-shirt made from 100% premium cotton. A wardrobe essential.",
    images: ["/tshirt-1.avif", "/tshirt-2.avif"],
    category: "Clothing",
    brand: "H&M",
    reviewData: {
      averageRating: 4.2,
      totalReviews: 320,
      reviews: [
        {
          id: 701,
          name: "Noah Jones",
          date: "25 Jul, 2025",
          rating: 5,
          text: "Super soft and fits perfectly. Great value for the price.",
        },
        {
          id: 702,
          name: "Isabella Taylor",
          date: "30 Jul, 2025",
          rating: 3,
          text: "Comfortable, but it shrunk a bit after the first wash.",
        },
      ],
    },
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    description:
      "Experience the next generation of mobile technology with a stunning display, professional-grade camera, and lightning-fast performance.",
    images: ["/phone-1.png", "/phone-2.png", "/phone-3.png", "/phone-4.png"],
    category: "Electronics",
    brand: "Samsung",
    reviewData: {
      averageRating: 4.8,
      totalReviews: 540,
      reviews: [
        {
          id: 801,
          name: "Liam Martinez",
          date: "09 Aug, 2025",
          rating: 5,
          text: "The camera is absolutely incredible, and the screen is gorgeous. Best phone I've ever used.",
        },
        {
          id: 802,
          name: "Ava Anderson",
          date: "12 Aug, 2025",
          rating: 4,
          text: "Blazing fast performance and the battery lasts all day. A fantastic device.",
        },
      ],
    },
  },
];

export default mockProducts;
