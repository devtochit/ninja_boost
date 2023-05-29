"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { FlyoutWithColsProps } from "../../types/nav"
import MenuBottomSection from "./bottom"

const FlyoutWithCols: React.FC<FlyoutWithColsProps> = ({ submenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flyout-primary absolute right-0 top-full z-10 mt-0 w-screen max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
    >
      {" "}
      <div className="p-4">
        <div className="grid grid-cols-12 gap-4">
          <Link
            href={`/documentation`}
            className="col-span-12 flex items-center px-4"
          >
            <img src="/Logo/book.svg" width="20px" className="mr-2" />
            <span className="mr-1">Documentation</span>
            <img src="/Logo/arrowupright.svg" width="6px" className="mr-2" />
          </Link>
          <div className="col-span-12 lg:col-span-4">
            {submenu?.col1?.map((item, index) => {
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
          <div className="col-span-12 lg:col-span-8">
            {submenu?.col2?.map((item, index) => {
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

          <MenuBottomSection className="px-4" />
        </div>
      </div>
      <div className="bg-wasmer-dark rounded-lg p-4 m-1">
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
  )
}
export default FlyoutWithCols
