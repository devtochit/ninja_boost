import React, { useState, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavItemProps } from "@/types/nav";
import { NavItemVariants } from "@/utils/motion";
import { MenuItem } from "./MenuItem";
import Image from 'next/image';


export const ProductMenu: React.FC = () => {
    return (
      <motion.div
        className="my-1 py-4 px-10 group cursor-pointer min-w-max flex  flex-col "
        layout
        variants={NavItemVariants}
      >
        <MenuItem
          icon={  <Image src="/Logo/runtime.svg" alt="Runtime" width={50} height={50} />}
          title="Runtime"
          description="Execute any code anywhere"
        />
        <MenuItem
          icon={  <Image src="/Logo/registry.svg" alt="Registry" width={50} height={50} />}
          title="Publish"
          description="Create, publish, collaborate"
        />
        <MenuItem
          icon={ <Image src="/Logo/stack.svg" alt="Stack" width={50} height={50} />}
          title="Edge"
          description="Deploy  above  the  clouds"
        />
        
      </motion.div>
    );
  };