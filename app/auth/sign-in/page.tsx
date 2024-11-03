import { CircleIcon } from "lucide-react"
import LogInForm from "./LogInForm"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import GoogleImage from "@/components/GoogleImage"
import { signIn } from "@/auth"

export default function SignInPage() {
  return (
    <div className="flex min-h-dvh flex-col justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <CircleIcon className="size-12 text-orange-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LogInForm />
        <div className="flex w-full justify-center pt-4 text-orange-700">
          <Link href="/auth/sign-up">New to our website? Create new account here!</Link>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-50 px-2 text-gray-500">Or Sign In with</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-2 sm:flex-row">
            <form
              className="w-full"
              action={async () => {
                "use server"

                await signIn("github")
              }}
            >
              <Button className="w-full" type="submit">
                <GitHubLogoIcon className="size-4" />
                Log in with Github
              </Button>
            </form>

            <form
              className="w-full"
              action={async () => {
                "use server"

                await signIn("google")
              }}
            >
              <Button variant="default" type="submit" className="w-full">
                <GoogleImage classname="size-4" width={32} height={32} />
                Log in with Google
              </Button>
            </form>
            {/* <Link
              href="/sign-up"
              // <Link
              //   href={`${mode === "signin" ? "/sign-up" : "/sign-in"}${redirect ? `?redirect=${redirect}` : ""}${
              //     priceId ? `&priceId=${priceId}` : ""
              //   }`}
              className="flex w-full justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Create an account
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
