"use client"

import { Loader2 } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import FormError from "@/components/form-error"
import FormSuccess from "@/components/form-success"
import { newVerification } from "@/lib/actions/verification.action"

const NewVerificationForm = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const handleVerification = useCallback(() => {
    if (error || success) return

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
  }, [token, error, success])

  useEffect(() => {
    handleVerification()
  }, [handleVerification])

  return (
    <div className="flex items-center gap-3 p-6">
      {!success && !error && (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          <span>Verifying email...</span>
        </>
      )}

      <FormSuccess message={success} />

      {!success && <FormError message={error} />}
    </div>
  )
}

export default NewVerificationForm
