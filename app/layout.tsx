import "styles/tailwind.css"
import type { Metadata, Viewport } from "next"
// import { GoogleTagManager } from "@next/third-parties/google";
import { Plus_Jakarta_Sans } from "next/font/google"
// import { UserProvider } from "@/lib/auth";
// import { getUser } from "@/lib/db/queries";
// import localFont from "next/font/local"
import AuthSessionProvider from "@/components/AuthSessionProvider"
import { siteConfig } from "@/lib/site.config"
// import { siteConfig } from "@/lib/site.config";

// const geistSans = localFont({
//   src: "./fonts/GeistSansVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// })
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      { rel: "icon", type: "image/x-icon", url: "/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
    apple: {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    }, // Apple icon
    shortcut: "/favicon-16x16.png", // Shortcut icon
  },
  ...{
    twitter: {
      card: "summary_large_image",
      creator: siteConfig.twitterCreator,
      site: siteConfig.domain,
    },
  },
}

export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // let userPromise = getUser();

  return (
    <html lang="en" className={`bg-white text-black dark:bg-gray-950 dark:text-white ${fontSans.className}`}>
      <head>
        {/* <AdSense pid="6917391278948112" /> */}
        {/* <GoogleTagManager gtmId="GTM-53DT2CP2" /> */}
      </head>
      <body className={`min-h-[100dvh] bg-gray-50`}>
        {/* <body className={`${geistSans.variable} ${geistMono.variable} min-h-[100dvh] bg-gray-50`}> */}
        {/* <UserProvider userPromise={userPromise}> */}
        <AuthSessionProvider>{children}</AuthSessionProvider>
        {/* </UserProvider> */}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
