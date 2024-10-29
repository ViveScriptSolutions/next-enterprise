import { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ViveScript Solutions LLC for inquiries and collaborations. Contact us through our form, email, or visit our office.",
}

const ContactUs = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        {/* Page Title */}
        <h1 className="mb-6 text-center text-4xl font-bold">Contact Us</h1>

        {/* Intro Section */}
        <p className="mx-auto mb-6 max-w-2xl text-center text-lg">
          We’d love to hear from you! Whether you have a question about our services, want to discuss a potential
          project, or need assistance, feel free to get in touch with us. Fill out the form below, and we’ll get back to
          you as soon as possible.
        </p>

        <Separator className="my-8" />

        {/* Contact Form Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Card>
              <CardContent>
                <h2 className="mb-4 text-2xl font-semibold">Send Us a Message</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Section */}
          <div>
            <Card>
              <CardContent>
                <h2 className="mb-4 text-2xl font-semibold">Contact Information</h2>
                <p className="mb-2 text-lg">If you prefer, you can reach us through the following channels:</p>

                <div className="space-y-4">
                  {/* <div>
                    <h3 className="text-xl font-semibold">Our Address</h3>
                    <p>ViveScript Solutions LLC</p>
                    <p>30 N Gould St</p>
                    <p>Sheridan, WY 82801</p>
                  </div> */}

                  <div>
                    <h3 className="text-xl font-semibold">Email Us</h3>
                    <p>
                      <a href="mailto:info@ViveScriptSolutions.com" className="text-blue-500 hover:underline">
                        info@ViveScriptSolutions.com
                      </a>
                    </p>
                  </div>

                  <div>
                    {/* <h3 className="text-xl font-semibold">Phone</h3> */}
                    {/* <p>+1 555 1234 567</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
