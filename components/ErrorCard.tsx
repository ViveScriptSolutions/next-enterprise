import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

const ErrorCard = () => {
  return (
    <Card>
      <CardHeader>
        <h2>Oops! Something went wrong!</h2>
      </CardHeader>
      <CardFooter>
        <Link href="/log-in">Back to login</Link>
      </CardFooter>
    </Card>
  )
}

export default ErrorCard
