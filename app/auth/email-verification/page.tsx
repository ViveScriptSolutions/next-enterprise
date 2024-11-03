import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import NewVerificationForm from "./NewVerificationForm"

const EmailVerificationPage = () => {
  return (
    <div className="container mx-auto h-screen">
      <div className="m-4 mx-auto w-full max-w-xl border">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Verify your email!</h2>
          </CardHeader>
          <NewVerificationForm />
          <CardContent></CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="/">Go to Home page</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default EmailVerificationPage
