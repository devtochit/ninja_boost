export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Developers",
      href: "/developers",
    },
    {
      title: "Package",
      href: "/package",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
