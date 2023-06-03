"use client"

import React, { useState,useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";
import { menuMobileItems } from "@/lib/navLinks";
import { HeaderProps } from "../types/nav";
import { SearchInput } from "./Inputs";
import { MobileNavBar } from "./Menu";
import { motion } from "framer-motion";
import { NavItemVariants } from "@/utils/motion";
import { NavItemProps, NavbarContextProps } from "@/types/nav";
import { ProductMenu } from "./Menu/ProductMenu";
import { DeveloperMenu } from "./Menu/DeveloperMenu";
import { CustomPrimaryButton } from './Buttons/index';


const NavbarContext = React.createContext<NavbarContextProps | null >(null);

const NavItem: React.FC<NavItemProps> = ({
  text,
  children,
  dropdown = false,
}) => {
    const { setActiveItem, activeItem } = useContext<NavbarContextProps | null>(NavbarContext)!;
    const [showSubmenu, setShowSubmenu] = useState(false);

  const handleHoverStart = () => {
    setActiveItem && setActiveItem(text);
  };

  const handleHoverEnd = () => {
    setActiveItem && setActiveItem(null);
  };

  const isHovered = activeItem === text;

  const handleClick = () => {
    setShowSubmenu(!showSubmenu);
  };
  
  return (
    <motion.div
      className={`px-5 relative cursor-pointer `}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      // onClick={handleClick}

    >
      <Link href="/" className="text-sm font-semibold leading-6 text-gray-500 relative">
        {text}
      </Link>

      {isHovered && dropdown  && (
        <motion.div
          layoutId="menu"
          className={`absolute top-[38px] visible shadow-lg z-10 border-1 border-grey-200 bg-white -left-2/4 rounded-md `}
          variants={NavItemVariants}
          style={{ minWidth: 385 }}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export const Header: React.FC<HeaderProps> = ({ loggedIn = false }) => {
  const [mobileMenuClicked, setmobileMenuClicked] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleMenu = ()    => {
    setmobileMenuClicked(!mobileMenuClicked);
    }

  return (
    <header className="border-b bg-transparent">
      <nav
        className="container flex items-center justify-between p-10 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="/Logo/logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4 lg:hidden">
          <CustomPrimaryButton buttonText="Sign up" size={`middle`} showIcon={false} />
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

        <NavbarContext.Provider value={{ activeItem, setActiveItem }}>


      <motion.nav className="hidden lg:flex lg:flex-1  justify-end ">
        <NavItem text="Product" dropdown={true}>
          <ProductMenu />
        </NavItem>

        <NavItem text="Developers" dropdown={true}>
          <DeveloperMenu />
        </NavItem>

        <NavItem text="Packages" dropdown={false}></NavItem>
        <NavItem text="Blog" dropdown={false}></NavItem>

           <div className="hidden lg:flex lg:justify-end items-center ">
            <CustomPrimaryButton buttonText="Sign up" size={`middle`} showIcon={false} />
          </div>
      </motion.nav>
    </NavbarContext.Provider>






    
      </nav>
    </header>
  );
}
