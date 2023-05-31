"use client"
import "@/styles/globals.css";
import "@/styles/fonts.css";
import "@/styles/ant.css";
// import { Metadata } from "next"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Header } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import {useState,useEffect} from 'react';
// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
  
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// }
const Dynamic = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  } 

  return <div className="flex-1">{children}</div>
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body >
          <div className="relative flex min-h-screen flex-col">
            {/* <Header /> */}
            <Dynamic>{children}</Dynamic>

          </div>
          <TailwindIndicator />
        </body>
      </html>
    </>
  );
}
