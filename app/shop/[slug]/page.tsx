import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ImageCarousel";
import DemoSection from "./DemoSection";
import AddOnsSection from "./AddOnsSection";
import FaqSection from "@/components/FaqSection";
import KeyFeatures from "./KeyFeatures";
import GetStartedModal from "@/components/Home/GetStartedModal";
import { getProductBySlug } from "@/lib/product.utils";
import { notFound } from "next/navigation";

export const revalidate = 3600 * 24; // revalidate the data at most every day

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProductBySlug(params.slug);

  if (!product) return notFound();

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      publishedTime: product.createdAt?.toLocaleTimeString(),
      modifiedTime: product.updatedAt?.toLocaleTimeString(),
      type: "article",
    },
  };
}

export default async function ProductPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const product = await getProductBySlug(params.slug);

  // if (loading) {
  //   return <div>Loading product details...</div>; // Skeleton loading could be added here
  // }

  if (!product) return notFound();

  return (
    <div className="container mx-auto py-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Image Carousel */}
        <div className="lg:w-1/2 w-full">
          {product.images && product.images.length > 0 ? (
            <ImageCarousel images={product.images} />
          ) : (
            <p>No images available for this product</p>
          )}
        </div>

        {/* Product Information */}
        <div className="lg:w-1/2 w-full lg:pl-8">
          <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
          <Badge variant="outline" className="text-sm">
            {product.category}
          </Badge>

          {/* Pricing and CTA */}
          <div className="my-4">
            <h2 className="text-3xl font-bold text-primary">
              ${product.basePrice.toFixed(2)}
            </h2>
            <p className="text-sm text-muted-foreground">
              Estimated Delivery: {product.minimumDays} days
            </p>

            <Button className="mt-4" size="lg">
              Buy Now
            </Button>
            <Button variant="secondary" size="lg" className="ml-2">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Product Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
        <p className="text-base text-muted-foreground mb-4">
          {product.description}
        </p>

        <ul className="list-disc pl-5">
          <li>Technologies: {product.technology.join(", ")}</li>
          {product.tools && <li>Tools Used: {product.tools.join(", ")}</li>}
        </ul>
      </section>

      {/* Key Feature Section */}
      {product.keyFeature && product.keyFeature.length > 0 && (
        <>
          <Separator className="my-8" />
          <KeyFeatures features={product.keyFeature} />
        </>
      )}

      {/* Add-ons Section */}
      {product.addOns && product.addOns.length > 0 && (
        <>
          <Separator className="my-8" />
          <AddOnsSection addOns={product.addOns} />
        </>
      )}

      {/* Demo Projects */}
      {product.demo && product.demo.length > 0 && (
        <>
          <Separator className="my-8" />
          <DemoSection demos={product.demo} />
        </>
      )}

      {/* Video Section */}
      {product.videoUrl && (
        <>
          <Separator className="my-8" />
          <section>
            <h2 className="text-2xl font-bold mb-4">Product Video</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={product.videoUrl}
                title="Product Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </section>
        </>
      )}

      {/* Schedule a meeting */}
      <Separator className="my-8" />
      <section>
        <h2 className="text-2xl font-bold mb-4">Still have questions!</h2>
        <div className="aspect-w-16 aspect-h-9">
          <p className="text-base text-muted-foreground mb-4">
            Please check the FAQ section bellow. You might find your answers
            there. Or Schedule a Meeting by clicking the following button:
          </p>
          <GetStartedModal
            variant="outline"
            label="Schedule a Meeting"
            reference={product.title}
          />
          {/* <Button variant="outline">Or Schedule a Meeting</Button> */}
        </div>
      </section>

      {/* FAQ Section */}
      {product.faq && product.faq.length > 0 && (
        <>
          <Separator className="my-8" />
          <FaqSection faq={product.faq} />
        </>
      )}

      {/* <Separator className="my-8" /> */}

      {/* Sticky Checkout Section */}
      <div className="mt-16 fixed bottom-0 left-0 w-full bg-white shadow-lg p-2 flex justify-between items-center">
        <div className="text-lg font-bold">
          ${product.basePrice.toFixed(2)} | Estimated Delivery:{" "}
          {product.minimumDays} days
        </div>
        <div>
          <Button size="lg" className="mr-2">
            Buy Now
          </Button>
          <Button variant="secondary" size="lg">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
