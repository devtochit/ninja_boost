"use client"

import {
  FlyoutSecondary,
  FlyoutWithColsSecondary,
} from "@/components/Menu"

import "../types/nav"
import Image from "next/image"

const productsChildren = [
  {
    label: "Runtime",
    info: "Run any code anywhere",
    icon: (
      <Image src="/Logo/runtime.svg" alt="Runtime" width={24} height={24} />
    ),
    url: "/",
  },
  {
    label: "Registry",
    info: "Create, publish, collaborate",
    icon: (
      <Image src="/Logo/registry.svg" alt="Registry" width={24} height={24} />
    ),
    url: "/",
  },
  {
    label: "Stack",
    info: "Deploy above the clouds",
    icon: <Image src="/Logo/stack.svg" alt="Stack" width={24} height={24} />,
    url: "/",
  },
]

const devsChildren = {
  col1: [
    {
      label: "Get started",
      info: null,
      icon: null,
      url: null,
    },
    {
      label: "Runtime",
      info: null,
      icon: null,
      url: "/",
    },
    {
      label: "Registry",
      info: null,
      icon: null,
      url: "/",
    },
    {
      label: "Edge",
      info: null,
      icon: null,
      url: "/",
    },
  ],
  col2: [
    {
      label: "Get started",
      info: null,
      icon: null,
      url: null,
    },
    {
      label: "Run a package",
      info: null,
      icon: null,
      url: "/",
    },
    {
      label: "Publish a package",
      info: null,
      icon: null,
      url: "/",
    },
    {
      label: "Deploy your website",
      info: null,
      icon: null,
      url: "/",
    },
  ],
}



export const menuMobileItems = [
  {
    label: "Products",
    href: "/",
    submenu: <FlyoutSecondary submenu={productsChildren} />,
  },
  {
    label: "Developers",
    href: "/",
    submenu: <FlyoutWithColsSecondary submenu={devsChildren} />,
  },
  {
    label: "Packages",
    href: "/",
    submenu: null,
  },
  {
    label: "Blog",
    href: "/",
    submenu: null,
  },
]
