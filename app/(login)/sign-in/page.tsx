import Login from "../login"

export default function SignInPage() {
  return <Login mode="signin" />
}

// import { Button } from "@/components/ui/button"
// import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { signIn } from "@/lib/auth"

// export default function LoginPage() {
//   return (
//     <div className="flex min-h-screen items-start justify-center p-8 md:items-center">
//       <Card className="w-full max-w-sm">
//         <CardHeader>
//           <CardTitle className="text-2xl">Login</CardTitle>
//           <CardDescription>This demo uses GitHub for authentication.</CardDescription>
//         </CardHeader>
//         <CardFooter>
//           <form
//             action={async () => {
//               "use server"
//               await signIn("github", {
//                 redirectTo: "/",
//               })
//             }}
//             className="w-full"
//           >
//             <Button className="w-full">Sign in with GitHub</Button>
//           </form>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }
