"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { ContactFormType, contactSchema } from "@/types/contact.types"
import { useState } from "react"
// import { saveNewMessage } from "@/lib/message.utils";

const ContactForm = ({ defaultValues }: { defaultValues?: Partial<ContactFormType> }) => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      email: defaultValues?.email || "",
      message: defaultValues?.message || "",
      reference: defaultValues?.reference || "",
    },
    mode: "onChange",
  })

  async function onSubmit(values: ContactFormType) {
    try {
      setIsLoading(true)

      // await saveNewMessage(values);

      toast({
        title: "Success!",
        description: "Your message has been delivered successfully.",
      })
      form.reset()
    } catch (error) {
      console.error(error)
      // Show error toast
      toast({
        title: "Error",
        description: "Message didn't send. Please try again later.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* If reference = "support", this field will not display */}
        <div className={defaultValues?.reference === "support" ? "hidden" : ""}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* If reference = "support", this field will not display */}
        <div className={defaultValues?.reference === "support" ? "hidden" : ""}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          disabled={isLoading}
        >
          Send Message
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
