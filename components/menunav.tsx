"use client"
import React, { useState, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { ReactNode } from 'react';
import { NavItemVariants, SubItemVariants } from "@/utils/motion";
import { NavItemProps, NavbarContextProps } from "@/types/nav";
import { ProductMenu } from "./Menu/ProductMenu";
import { DeveloperMenu } from "./Menu/DeveloperMenu";


import Image from "next/image";

import * as Icon from "react-feather";

import { menuItems, menuMobileItems } from "@/lib/navLinks";

import { PrimaryButton } from "./Buttons/index1";
import { SearchInput } from "./Inputs";
import { MobileNavBar } from "./Menu";





const NavbarContext = React.createContext<NavbarContextProps | null >(null);

const NavItem: React.FC<NavItemProps> = ({
  text,
  children,
  dropdown = false,
}) => {
    const { setActiveItem, activeItem } = useContext<NavbarContextProps | null>(NavbarContext)!;

  const handleHoverStart = () => {
    setActiveItem && setActiveItem(text);
  };

  const handleHoverEnd = () => {
    setActiveItem && setActiveItem(null);
  };

  const isHovered = activeItem === text;

  return (
    <motion.div
      className={`px-5 relative cursor-pointer `}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <Link href="/" className="relative">
        {text}
      </Link>

      {isHovered && dropdown && (
        <motion.div
          layoutId="menu"
          className={`absolute visible shadow-lg border-1 border-grey-200 bg-white -left-2/4 rounded-3xl dropdown__container2`}
          variants={NavItemVariants}
          style={{ minWidth: 400 }}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileMenuClicked, setmobileMenuClicked] = useState(true);

  const toggleMenu = ()    => {
    setmobileMenuClicked(!mobileMenuClicked);
    }
  return (
    <NavbarContext.Provider value={{ activeItem, setActiveItem }}>
      <motion.nav className="border p-10 hidden md:flex justify-center">
      <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="/Logo/logo.svg" alt="" />
          </Link>
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
        {/* {loggedIn ? (
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
        ) : ( */}
          <div className="hidden lg:flex lg:justify-end items-center gap-8">
            <PrimaryButton text="Sign up" size={`middle`} iconstat={false} />
          </div>
{/*       
        <NavItem text="Home" dropdown={true}>
          <ProductMenu />
        </NavItem>

        <NavItem text="Developers" dropdown={true}>
          <DeveloperMenu />
        </NavItem>

        <NavItem text="Packages" dropdown={false}></NavItem>
        <NavItem text="Blog" dropdown={false}></NavItem> */}
      </motion.nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
