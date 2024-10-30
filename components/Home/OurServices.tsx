import { CheckCircle, CreditCard, Database } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {} from "lucide-react"
import { services } from "@/lib/constant"
// import { getAllServices } from "@/lib/service.utils";

export const revalidate = 3600 * 24 // revalidate the data at most every day

export default async function OurServices() {
  // const services = await getAllServices();

  if (!services) {
    return null
  }

  return (
    <section className="services py-16" id="services">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`} className="block">
              <Card>
                <CardHeader className="h-24 max-h-24 min-h-24">
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.subTitle}</CardDescription>
                </CardHeader>
                <CardContent className="grid h-32 max-h-32 min-h-32 gap-6 overflow-hidden text-gray-600">
                  {service.brief}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    See Details
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {services.map((service, indx) => (
              <div key={indx} className="mt-10 lg:mt-0">
                <div className="flex size-12 items-center justify-center rounded-md bg-orange-500 text-white">
                  <Database className="size-6" />
                </div>
                <div className="mt-5">
                  <Link href={`/services/${service.slug}`}>
                    <h2 className="text-lg font-medium text-gray-900">{service.title}</h2>
                  </Link>

                  <p className="mt-2 text-base text-gray-500">
                    {service.brief?.slice(0, 180) + "..."}
                    <Link href={`/services/${service.slug}`}> readmore</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </section>
  )
}
