"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Separator } from "@/components/ui/separator"

import { MenuBottomSectionProps } from "../../types/nav"

const MenuBottomSection: React.FC<MenuBottomSectionProps> = ({
  bothsections = true,
  className = "",
}) => (
  <>
    <div className={`col-span-12 ${className}`}>
      <Separator className="mb-4 mt-0" />
      <Link href={`#`} className="flex items-center">
        <img src="/Logo/cli.svg" width="20px" className="mr-2" />
        <span className="mr-1 text-black">CLI</span>
      </Link>
      <Separator className="mt-4 mb-0" />
    </div>

    {bothsections ? (
      <div className={`col-span-12 ${className}`}>
        <p className="text-gray-500 mb-1">Tools</p>
        <Link href={`#`} className="text-sm font-semibold">
          Visual Studio Code Extension
        </Link>
      </div>
    ) : null}
  </>
)

export default MenuBottomSection
