"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CircleIcon, Home, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { useUser } from "@/lib/auth";
// import { signOut } from "@/app/(login)/actions";
import { useRouter } from "next/navigation"
import Logo from "@/components/branding/Logo"
import { siteConfig } from "@/lib/site.config"
import { LayoutDashboardIcon } from "lucide-react"
import { User } from "lucide-react"
import { Users } from "lucide-react"
import { Github } from "lucide-react"
import { LifeBuoy } from "lucide-react"
import { Separator } from "@radix-ui/react-dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, setUser } = { user: "", setUser: () => {} }
  // const { user, setUser } = useUser();
  const router = useRouter()

  async function handleSignOut() {
    // setUser(null);
    // await signOut();
    router.push("/")
  }

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <Link href="/">
        <Logo fillColor="#000" />
      </Link>
      <div className="md:hidden">
        <button className="menu-btn text-gray-400 hover:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )

  return (
    <header className="border-b border-gray-200">
      <div className={`md:hidden ${isMenuOpen ? "mx-2 pb-5" : "hidden"}`}>
        <Brand />
      </div>
      <nav
        className={`pb-5 md:text-sm ${
          isMenuOpen
            ? "absolute inset-x-0 top-0 z-20 mx-2 mt-2 rounded-xl bg-gray-100 dark:bg-gray-800 md:relative md:mx-0 md:mt-0 md:bg-transparent"
            : ""
        }`}
      >
        <div className="mx-auto max-w-screen-xl items-center gap-x-14 px-4 md:flex md:px-8">
          <Brand />
          <div className={`mt-8 flex-1 items-center md:mt-0 md:flex ${isMenuOpen ? "block" : "hidden"} `}>
            <ul className="flex-1 items-center justify-end space-y-6 md:flex md:space-x-6 md:space-y-0">
              {siteConfig.mainNav.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                )
              })}

              {/* <UserMenu /> */}
              {user ? (
                <>
                  <div className="flex flex-col gap-3 md:hidden">
                    <div className="flex items-center justify-start gap-3 border-t border-gray-200">
                      <Avatar className="mt-6 size-9 cursor-pointer">
                        <AvatarImage
                          alt={""}
                          // alt={user.name || ""}
                          src={"/assets/images/avater_demon.jpeg"}
                          // src={user?.photoURL || "/assets/images/avater_demon.jpeg"}
                        />
                        <AvatarFallback>
                          {""}
                          {/* {user.email
                            .split(" ")
                            .map((n) => n[0])
                            .join("")} */}
                        </AvatarFallback>
                      </Avatar>
                      <h5 className="font-semibold text-gray-700">{"My Account"}</h5>
                    </div>
                    <li>
                      <Link href="/dashboard" className="flex w-full items-center">
                        <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                        {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                      </Link>
                    </li>
                    <li>
                      <Link href="/dashboard/team" className="flex w-full items-center">
                        <Users className="mr-2 h-4 w-4" />
                        <span>Team</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/dashboard/" className="flex w-full items-center">
                        <Github className="mr-2 h-4 w-4" />
                        <span>GitHub</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/dashboard/" className="flex w-full items-center">
                        <LifeBuoy className="mr-2 h-4 w-4" />
                        <span>Support</span>
                      </Link>
                    </li>
                    <form action={handleSignOut} className="w-full">
                      <button type="submit" className="flex w-full">
                        <li className="flex w-full cursor-pointer items-center">
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Sign out</span>
                        </li>
                      </button>
                    </form>
                  </div>

                  <div className="hidden md:flex md:flex-col">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Avatar className="size-9 cursor-pointer">
                          <AvatarImage
                            alt={""}
                            src={"/assets/images/avater_demon.jpeg"}
                            // src={user?.photoURL || "/assets/images/avater_demon.jpeg"}
                          />
                          <AvatarFallback>
                            {""}
                            {/* {user.email
                            .split(" ")
                            .map((n) => n[0])
                            .join("")} */}
                          </AvatarFallback>
                        </Avatar>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>{"My Account"}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <Link href="/dashboard" className="flex w-full items-center">
                              <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                              <span>Dashboard</span>
                              {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="/dashboard/profile" className="flex w-full items-center">
                              <User className="mr-2 h-4 w-4" />
                              <span>Profile</span>
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <Link href="/dashboard/team" className="flex w-full items-center">
                              <Users className="mr-2 h-4 w-4" />
                              <span>Team</span>
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link href="/dashboard/" className="flex w-full items-center">
                            <Github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/dashboard/" className="flex w-full items-center">
                            <LifeBuoy className="mr-2 h-4 w-4" />
                            <span>Support</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <form action={handleSignOut} className="w-full">
                            <button type="submit" className="flex w-full">
                              <DropdownMenuItem className="w-full flex-1 cursor-pointer">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Sign out</span>
                              </DropdownMenuItem>
                            </button>
                          </form>
                          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </>
              ) : (
                <li>
                  <Button asChild className="rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-gray-800">
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
