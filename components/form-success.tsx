import { CheckCircle } from "lucide-react"

interface FormSuccessProps {
  message?: string
}
const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-600">
      <CheckCircle className="size-4" />
      <p>{message}</p>
    </div>
  )
}

export default FormSuccess
