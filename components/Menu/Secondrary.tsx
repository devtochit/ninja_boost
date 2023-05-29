"use client"

import NextLink from "next/link"
import { motion } from "framer-motion"

import { FlyoutProps } from "../../types/nav"

const FlyoutSecondary: React.FC<FlyoutProps> = ({ submenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-0"
    >
      {" "}
      {submenu?.map((item, index) => (
        <div
          key={index}
          className="group relative flex items-center gap-x-6 rounded-lg px-0 py-1 text-sm leading-6 hover:bg-gray-50"
        >
          {item.icon ? (
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              {item.icon}
            </div>
          ) : null}
          <div className="flex-auto">
            {item.url == null ? (
              <span className="font-semibold text-gray-500">{item.label}</span>
            ) : (
              <NextLink legacyBehavior href={item.url} passHref>
                <a className="block font-semibold text-gray-900">
                  {item.label}
                  <span className="absolute inset-0"></span>
                </a>
              </NextLink>
            )}
            {item.info ? (
              <p className="mt-1 text-gray-600">{item.info}</p>
            ) : null}
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default FlyoutSecondary
