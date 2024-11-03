import { ArrowRight } from "lucide-react"
import Link from "next/link"
import AboutUsSection from "@/components/Home/AboutUsSection"
import Features from "@/components/Home/Features"
import OurServices from "@/components/Home/OurServices"
import TestimonialSection from "@/components/Home/Testimonial"
import { Button } from "@/components/ui/button"
import { Terminal } from "./terminal"

export default function Dashboard() {
  return (
    <main>
      {/* Hero Section  */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Elevate Your Business with Modern
                <span className="block text-orange-500">Web/AI Technology</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Boost Efficiency and Grow Your Business with Tailored Web Solutions. Implement AI technology, workflow
                automation and modern web application for your business.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                {/* <GetStartedModal /> */}
                {/* TODO: Change the Button link for Explore Our Services */}
                <Link href="#services" className="btn-secondary ml-4">
                  Our Services
                </Link>
                {/* <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                  Deploy your own
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button> */}
              </div>
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <Features />

      <AboutUsSection />

      <OurServices />

      <TestimonialSection />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Ready to work with us?</h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                We will provide everything you need to make your business success. Don&apos;t waste time on boilerplate
                - focus on what makes your business unique.
              </p>
            </div>
            <div className="mt-8 flex justify-center lg:mt-0 lg:justify-end">
              <a href="/shop" target="_blank">
                <Button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-12 py-6 text-xl text-black hover:bg-gray-100">
                  Get Started
                  <ArrowRight className="ml-3 size-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
