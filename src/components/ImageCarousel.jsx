"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ product, className }) => {
  // falling back to a single image if no multiple images array exists
  const productImages = product ? product.images || [product.image] : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  //   preview previous image handler
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? productImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  //   preview next image handler
  const goToNext = () => {
    const isLastImage = currentIndex === productImages.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const selectedImage = productImages[currentIndex];

  return (
    <section className={className}>
      {/* thumbnails for multiple images*/}
      <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto pr-2">
        {productImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.title} thumbnail ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-17 h-17 object-cover rounded-md cursor-pointer transition-all ${
              currentIndex === index
                ? "border-2 border-gray-900"
                : "border-transparent hover:border-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1">
        <img
          src={selectedImage}
          alt={product.title}
          className="w-full h-full aspect-square object-cover rounded-lg shadow-md"
        />

        {/* Navigation Buttons */}
        {productImages.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default ImageCarousel;
