"use client"

import Image from "next/image"
import Link from "next/link"
import NextLink from "next/link"
import { motion } from "framer-motion"
import * as Icon from "react-feather"

import { Separator } from "@/components/ui/separator"

import { FlyoutProps } from "../../types/nav"

const Flyout: React.FC<FlyoutProps> = ({ submenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flyout-primary absolute right-0 top-full z-10 mt-0 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
    >
      <div className="p-4">
        {submenu?.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-50"
            >
              {item.icon ? (
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  {item.icon}
                </div>
              ) : null}
              <div className="flex-auto">
                {item.url == null ? (
                  <span className="font-semibold text-gray-500">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="block font-semibold text-gray-900"
                  >
                    {item.label}
                    <span className="absolute inset-0"></span>
                  </Link>
                )}
                {item.info ? (
                  <p className="mt-1 text-gray-600">{item.info}</p>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
export default Flyout
