import { redirect } from "next/navigation"
import { Settings } from "./settings"
import { auth } from "@/auth"

export default async function SettingsPage() {
  const user = { id: "4324", name: "amir", email: "test@test.com" }

  // const user = await getUser();

  if (!user) {
    redirect("/auth/sign-in")
  }

  const teamData = { id: "", name: "", email: "" }
  // const teamData = await getTeamForUser(user.id)

  if (!teamData) {
    throw new Error("Team not found")
  }

  return <Settings teamData={teamData} />
}
