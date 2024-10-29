import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { notFound, useRouter } from "next/navigation";
import { getServiceBySlug } from "@/lib/service.utils";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 3600 * 24; // revalidate the data at most every day

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const service = await getServiceBySlug(params.slug);

  if (!service) return notFound();

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      publishedTime: service.createdAt?.toLocaleTimeString(),
      modifiedTime: service.updatedAt?.toLocaleTimeString(),
      type: "article",
    },
  };
}

export default async function ServicePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const service = await getServiceBySlug(params.slug);

  if (!service) return notFound();

  // if (loading) {
  //   return <div>Loading service details...</div>; // Skeleton loading could be added here
  // }

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Service Image */}

        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          {service.imageUrl && (
            <Image
              src={service.imageUrl}
              width={600}
              height={600}
              alt={service.title}
              className="rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Service Information */}
        <div className="md:w-1/2 w-full md:pl-8">
          <h1 className="text-5xl font-bold text-primary">{service.title}</h1>
          <Badge variant="outline" className="text-sm mt-2">
            {service.subTitle}
          </Badge>

          {/* Pricing and CTA */}
          <div className="my-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {service.brief}
            </p>
            {service.cta && (
              <Link href={service.cta.link}>
                <Button className="mt-4" size="lg" color="blue">
                  {service.cta.text || "Test"}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Service Overview */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Service Overview</h2>
        <p className="text-base text-muted-foreground mb-4">
          {service.description}
        </p>
        {service.keyPoints && service.keyPoints.length > 0 && (
          <ul className="list-disc pl-5 mb-4">
            {service.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </section>

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <>
          <Separator className="my-8" />
          <FaqSection faq={service.faq} />
        </>
      )}

      {/* Sticky Call to Action Section */}
      {/* <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-between items-center">
        <div className="text-lg font-bold text-gray-700">{service.title}</div>
        <Button size="lg" color="green">
          {service.cta.text}
        </Button>
      </div> */}
    </div>
  );
}
