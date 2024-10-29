// TODO: Make data catch for long time like 24 hours to increase performance SEO

import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton"; // Shadcn Skeleton component
import ShopHeroSection from "./ShopHeroSection";
import TestimonialSection from "@/components/Home/Testimonial";
import { getAllProducts } from "@/lib/product.utils";

export const revalidate = 3600; // revalidate the data at most every hour

export default async function Shop() {
  const products = await getAllProducts();

  if (!products) {
    return (
      <main className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {/* Show Skeletons while loading */}
          {[...Array(6)].map((_, idx) => (
            <Skeleton key={idx} className="h-80 w-full" />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto">
      <ShopHeroSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <TestimonialSection />
    </main>
  );
}
