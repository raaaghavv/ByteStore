"use client";
import { useParams } from "next/navigation";
import mockProducts from "@/data/products";
import ReviewsSection from "@/components/Reviews";
import ImageCarousel from "@/components/ImageCarousel";
import ProductDetails from "@/components/ProductDetails";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === Number(id));

  // show "product not found" error screen if product doesn't exists
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6 text-center">
        <h2 className="text-lg font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <main className="flex flex-col max-w-[1440px] min-h-screen mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex p-4 sm:p-8 flex-col md:flex-row gap-12 items-center md:items-start">
        <ImageCarousel
          product={product}
          className="md:flex-2/3 w-full flex flex-col-reverse sm:flex-row gap-4"
        />
        <ProductDetails
          product={product}
          className="md:flex-1/3 w-full flex flex-col gap-4"
        />
      </div>

      <ReviewsSection
        reviewData={product.reviewData}
        className="w-full p-4 sm:p-8 mx-auto"
      />
    </main>
  );
};

export default ProductDetailPage;
