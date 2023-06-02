import React, { useState, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SubItemVariants } from "@/utils/motion";
import { Separator } from "../ui/separator";
import Image from "next/image";



export const DeveloperMenu: React.FC = () => {
    return (
      <motion.div
        className=" cursor-pointer min-w-max"
        layout
        variants={SubItemVariants}
      >
        <div className="flex flex-col py-5 px-5">
          <div className="flex items-center  gap-2">
          <Image src="/Logo/book.svg" width={30} height={30} alt='book' className="mr-2" />
            <h2 className=" text-black text-left">
              Documentation
            </h2>
            <Image src="/Logo/arrowupright.svg" width={14} height={14} alt="arrowright" className="mr-2" />

          </div>
  
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="flex flex-col align-start gap-2">
              <p className="developer-headline text-left mb-4">Getting Started</p>
              <ul className={`list-none flex gap-4 flex-col`}>
                <li>
                  <Link href="/">Runtime</Link>
                </li>
                <li>
                  <Link href="/">Registry</Link>
                </li>
                <li>
                  <Link href="/">Edge</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col align-start gap-2">
              <p className="text-left mb-2">Guides</p>
              <ul className={`list-none flex gap-4 flex-col`}>
          
              <li>
                  <Link href="/">  Run a package</Link> 
                </li>
                <li>
                  <Link href="/">Publish a package </Link> 
                </li>
                <li>
                  <Link href="/">Deploy your website</Link>
                </li>
              </ul>
            </div>
          </div>
  
   
          <div className="">
          <Separator className="mb-2 mt-0" />
          <Link href={`#`} className="flex items-center">
            <Image src="/Logo/cli.svg" width={20} height={20} alt='cli' className="mr-2" />
            <span className="mr-1 text-black">CLI</span>
          </Link>
          <Separator className="mt-4 mb-0" />
        </div>

        <div className="py-1">
        <p className="text-gray-500 mb-1">Tools</p>
        <Link href={`#`} className="text-sm font-semibold developer-title text-black ">
          Visual Studio Code Extension
        </Link>
      </div>
        </div>

    
        <div className="wasmer-dark-background rounded-lg p-4 m-1">
        <p className="text-gray-500 mb-1">SDK’S</p>

        <div className="flex items-center justify-between font-medium">
          <Link href="#">Python</Link>
          <Link href="#">Rust</Link>
          <Link href="#">Go</Link>
          <Link href="#">C</Link>
          <Link href="#">Rust</Link>
          <Link href="#">Docker</Link>
        </div>
      </div>
      </motion.div>
    );
  };