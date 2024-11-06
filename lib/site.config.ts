export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ViveScript Solutions",
  legalName: "ViveScript Solutions LLC.",
  slogan: "Code. Create. Innovate.",
  description: "",
  domain: "https://www.vivescriptsolutions.com",
  email: "info@ViveScriptSolutions.com",
  telephone: "+1 555 1234 567",
  mainNav: [
    {
      title: "Home",
      href: "/",
      description: "Elevate Your Business with Cutting-Edge Web Development & Automation.",
    },
    {
      title: "Shop",
      href: "/shop",
      description:
        "We've created some possible pre-defined products for our customers. You might find your solution in the sop section.",
    },
    {
      title: "About Us",
      href: "/about",
      description:
        "Find out who we are and what we are capable of. We combine innovation and expertise to build custom solutions that drive results for you.",
    },
    {
      title: "Projects",
      href: "/projects",
      description: "Check some of the projects we’ve worked on.",
    },
    {
      title: "Contact",
      href: "/contact",
      description:
        "We’d love to hear from you! Whether you have a question about our services, want to discuss a potential project, or need assistance, feel free to get in touch with us. ",
    },
  ],
  footerLinks: [
    {
      url: "/blog",
      title: "Blog",
      tooltip: "Our blog section",
    },
    {
      url: "/privacy-policy",
      title: "Privacy Policy",
      tooltip: "Privacy Policy",
    },
    {
      url: "/terms-conditions",
      title: "Terms and Conditions",
      tooltip: "Terms and Conditions",
    },
    { url: "/cookie-policy", title: "Cookie Policy", tooltip: "Cookie Policy" },
    {
      url: "/refund-policy",
      title: "Refund Policy (if applicable)",
      tooltip: "Refund Policy (if applicable)",
    },
  ],
  links: {
    twitter: "https://twitter.com/vivesporting",
    facebook: "https://www.facebook.com/people/Vive-Sporting/61558995184760/",
    github: "https://github.com/ViveScriptSolutions",
    youtube: "https://www.youtube.com/@vivesporting",
    tiktok: "https://www.tiktok.com/@vivesporting",
    linkedin: "https://www.linkedin.com/",
    docs: "#",
  },
  twitterCreator: "@vivesporting", // Must tart with @
}
