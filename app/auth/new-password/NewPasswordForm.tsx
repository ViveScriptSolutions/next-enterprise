"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import FormError from "@/components/form-error"
import FormSuccess from "@/components/form-success"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { NewPasswordSchema } from "@/lib/schema"
import { setNewPassword } from "@/lib/actions/reset.action"

const NewPasswordForm = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  })

  const handleResetPw = async (values: z.infer<typeof NewPasswordSchema>) => {
    setError("")
    setSuccess("")

    startTransition(() => {
      console.log(token)

      setNewPassword(values, token).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
      // console.log(values)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleResetPw)} className="space-y-6">
        <div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">New Password</FormLabel>
                <FormControl>
                  <div className="mt-1">
                    <Input
                      {...field}
                      placeholder="******"
                      type="password"
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

        <FormError message={error} />
        <FormSuccess message={success} />

        <Button
          type="submit"
          disabled={isPending}
          className="flex w-full items-center justify-center rounded-full border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Reset password"
          )}
        </Button>
      </form>
    </Form>
  )
}

export default NewPasswordForm
