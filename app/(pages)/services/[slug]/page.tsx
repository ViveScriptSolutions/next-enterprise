// import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
// import { getServiceBySlug } from "@/lib/service.utils"
// import FaqSection from "@/components/FaqSection"

export const revalidate = 3600 * 24 // revalidate the data at most every day

// export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//   const params = await props.params
//   // const service = await getServiceBySlug(params.slug)

//   if (!service) return notFound()

//   return {
//     title: service.title,
//     description: service.description,
//     openGraph: {
//       publishedTime: service.createdAt?.toLocaleTimeString(),
//       modifiedTime: service.updatedAt?.toLocaleTimeString(),
//       type: "article",
//     },
//   }
// }

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  // const params = await props.params
  // const service = await getServiceBySlug(params.slug)
  const service: any = []

  if (!service) return notFound()

  // if (loading) {
  //   return <div>Loading service details...</div>; // Skeleton loading could be added here
  // }

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center md:flex-row md:items-start">
        {/* Service Image */}

        <div className="mb-6 w-full md:mb-0 md:w-1/2">
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
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-5xl font-bold text-primary">{service.title}</h1>
          <Badge variant="outline" className="mt-2 text-sm">
            {service.subTitle}
          </Badge>

          {/* Pricing and CTA */}
          <div className="my-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">{service.brief}</p>
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
        <h2 className="mb-4 text-3xl font-bold">Service Overview</h2>
        <p className="mb-4 text-base text-muted-foreground">{service.description}</p>
        {service.keyPoints && service.keyPoints.length > 0 && (
          <ul className="mb-4 list-disc pl-5">
            {/* {service.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))} */}
          </ul>
        )}
      </section>

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <>
          <Separator className="my-8" />
          {/* <FaqSection faq={service.faq} /> */}
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
  )
}
