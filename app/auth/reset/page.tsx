import React from "react"
import ResetForm from "./ResteForm"
import { CircleIcon } from "lucide-react"
import Link from "next/link"

const ResetPage = () => {
  return (
    <div className="container mx-auto flex min-h-dvh flex-col justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <CircleIcon className="size-12 text-orange-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <ResetForm />

        <div className="flex w-full justify-center pt-4 text-orange-700">
          <Link href="/auth/sign-in">Go back to Sign in page!</Link>
        </div>
      </div>
    </div>
  )
}

export default ResetPage
