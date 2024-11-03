"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useCallback, useEffect, useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import FormError from "@/components/form-error"
import FormSuccess from "@/components/form-success"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation"
import { newVerification } from "@/lib/actions/verification.action"

const NewVerificationForm = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  //   const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  //   const form = useForm<z.infer<typeof EmailVerificationSchema>>({
  //     resolver: zodResolver(EmailVerificationSchema),
  //     defaultValues: { email: "", token: "" },
  //   })

  const handleVerification = useCallback(() => {
    if (!token) {
      setError("Missing token!")
      return
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch((err) => {
        setError("Something went wrong!")
        console.error(err)
      })
  }, [token])

  useEffect(() => {
    handleVerification()
  }, [handleVerification])

  //   async (value: z.infer<typeof EmailVerificationSchema>) => {
  //     setError("")
  //     setSuccess("")

  //     startTransition(() => {
  //       console.log(value)
  //     })
  //   }

  return (
    <div className="flex items-center gap-3 p-6">
      {!success && !error && (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          <span>Verifying email...</span>
        </>
      )}

      <FormError message={error} />
      <FormSuccess message={success} />
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(handleVerification)} className="space-y-6">
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">Email</FormLabel>
                  <FormControl>
                    <div className="mt-1">
                      <Input
                        {...field}
                        placeholder="Enter your email"
                        type="email"
                        disabled={isPending}
                        className="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="token"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">Email</FormLabel>
                  <FormControl>
                    <div className="mt-1">
                      <Input
                        {...field}
                        placeholder="Enter your email"
                        type="email"
                        disabled
                        className="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center rounded-full border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            // disabled={pending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Verify"
            )}
          </Button>
        </form>
      </Form> */}
    </div>
  )
}

export default NewVerificationForm
