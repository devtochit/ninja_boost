import React, { useState, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavItemProps, NavbarContextProps } from "@/types/nav";
import { NavItemVariants } from "@/utils/motion";


const NavbarContext = React.createContext<NavbarContextProps | null>(null);

export const NavItem: React.FC<NavItemProps> = ({
    text,
    children,
    dropdown = false,
  }) => {
    const { setIsHovered, isHovered} = useContext(NavbarContext);
  
    const handleHoverStart = () => {
      setIsHovered && setIsHovered(true);
    };
  
    const handleHoverEnd = () => {
      setIsHovered && setIsHovered(false);
    };
  
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