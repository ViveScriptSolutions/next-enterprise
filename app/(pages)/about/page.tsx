import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { services } from "@/lib/constant"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about ViveScript Solutions LLC - our mission, values, and services in web and app development, automation, and more.",
}

const about = async () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-10">
          {/* Page Title */}
          <h1 className="mb-6 text-center text-4xl font-bold">About ViveScript Solutions</h1>

          {/* Introduction Section */}
          <div className="mb-8 text-center">
            <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed">
              At <strong>ViveScript Solutions LLC</strong>, we believe in harnessing the power of technology to help
              businesses thrive in the digital age. Our goal is to deliver tailor-made web, app, and software
              development services that not only meet but exceed your expectations.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed">
              We combine <strong>innovation</strong> and <strong>expertise</strong> to build custom solutions that drive
              results. Whether you&apos;re looking to enhance your online presence, streamline operations, or leverage
              data to make better decisions, we’re here to help.
            </p>
          </div>

          {/* <Separator className="my-8" /> */}

          {/* Core Values Section */}
          <h2 className="mb-6 mt-24 text-center text-3xl font-semibold">Our Core Values</h2>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
            <Card className="w-full md:w-1/3">
              <CardContent>
                <h3 className="mb-4 text-xl font-semibold">Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of the curve by embracing cutting-edge technology, continuously exploring new ideas, and
                  pushing the boundaries of what&apos;s possible in web and app development.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full md:w-1/3">
              <CardContent>
                <h3 className="mb-4 text-xl font-semibold">Client-Centric Approach</h3>
                <p className="text-gray-600">
                  Our clients are at the heart of everything we do. We collaborate closely with you to understand your
                  unique challenges and craft solutions tailored specifically to your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full md:w-1/3">
              <CardContent>
                <h3 className="mb-4 text-xl font-semibold">Excellence</h3>
                <p className="text-gray-600">
                  We are committed to delivering top-tier services, maintaining the highest standards of quality, and
                  ensuring your satisfaction at every stage of the project.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* <Separator className="my-8" /> */}

          {/* Services Overview Section */}
          <h2 className="mb-6 mt-24 text-center text-3xl font-semibold">Our Services</h2>
          <div className="mb-8 text-center">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed">
              At ViveScript Solutions, we offer a wide range of digital services designed to help your business thrive.
              Our specialties include:
            </p>
          </div>
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id}>
                <CardContent>
                  <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.brief}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="mb-8 mt-16" />

          {/* Call to Action Section */}
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-semibold">Let&apos;s Work Together</h2>
            <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed">
              Ready to elevate your business with innovative solutions? Let’s embark on a transformative journey
              together. Get in touch with us today to start discussing your next project!
            </p>
            <Link href="/contact">
              <Button className="rounded-lg bg-green-500 px-6 py-3 text-white hover:bg-green-600">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default about
