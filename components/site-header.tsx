"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icon from "react-feather";

import { menuItems, menuMobileItems } from "@/lib/navLinks";

import { HeaderProps } from "../types/nav";
import { PrimaryButton } from "./Buttons";
import { SearchInput } from "./Inputs";
import { MobileNavBar } from "./Menu";

export const Header: React.FC<HeaderProps> = ({ loggedIn = false }) => {
  const [mobileMenuClicked, setmobileMenuClicked] = useState(true);

  const toggleMenu = ()    => {
    setmobileMenuClicked(!mobileMenuClicked);
  }

  return (
    <header className="border-b bg-transparent">
      <nav
        className="container flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="/Logo/logo.svg" alt="" />
          </a>
        </div>
        <div className="flex items-center justify-end gap-4 lg:hidden">
          <PrimaryButton text="Sign up" size={`middle`} iconstat={false} />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 relative"
          >
            <div onClick={toggleMenu}>
              {mobileMenuClicked ? (
                <Icon.Menu size={20} />
              ) : (
                <Icon.X size={20} />
              )}
            </div>

            <MobileNavBar
              hidden={mobileMenuClicked}
              MenuMobileItems={menuMobileItems}
            />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 gap-2 justify-center px-2">
          <SearchInput placeholder="Search packages, users or apps" />
        </div>

        <div className="hidden lg:flex lg:flex-1 gap-8 justify-end px-8 menu-items">
          {menuItems?.map((item, index) => (
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-500 relative"
              key={`${index}_${item.label}`}
            >
              {item.label}
              {item.submenu ? item.submenu : null}
            </Link>
          ))}
        </div>
        {loggedIn ? (
          <div className="hidden lg:flex lg:justify-end items-center gap-8">
            <Link href={`#`}>
              <img
                src="/Logo/notifications.svg"
                width="20px"
                alt="Notifications"
              />
            </Link>

            <Link href={`#`}>
              <img
                src="/Logo/avatar2.svg"
                alt="Avatar"
                className="rounded-full"
                width="20px"
              />
            </Link>
          </div>
        ) : (
          <div className="hidden lg:flex lg:justify-end items-center gap-8">
            <PrimaryButton text="Sign up" size={`middle`} iconstat={false} />
          </div>
        )}
      </nav>
    </header>
  );
}
