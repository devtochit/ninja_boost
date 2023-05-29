"use client"

import { useEffect, useState } from "react"
import { Spin, Typography } from "antd"
import {
  AnimatePresence,
  motion,
  stagger,
  useAnimate,
  useInView,
  usePresence,
} from "framer-motion"
import { fadeIn,staggerContainer } from "@/utils/motion"
import styles from "@/styles"
import { PrimaryButton } from "@/components/Buttons"
import { LargeCTA, MidCTA } from "@/components/CTA"

const logos = [
  "/Logo/brandIcons/white/logo1.svg",
  "/Logo/brandIcons/white/logo2.svg",
  "/Logo/brandIcons/white/logo3.svg",
  "/Logo/brandIcons/white/logo4.svg",
  "/Logo/brandIcons/white/logo5.svg",
]

const { Title } = Typography
function Explore() {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
  >
    <div className="container">
      <div className="z-20 text-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src="/imgs/section.svg" width={`1.4px`} />
          <PrimaryButton
            text="Runtime"
            icon={<img src="/imgs/runtime.png" width="25" />}
            size="middle"
          />

          <Title className="mt-4 text-48">Run the world</Title>
          <p className="font-22 max-w-screen-md mx-auto">
            Using a binary for each platform and chip is the past. Rise above
            with lightweight containerized apps that simply run everywhere.
          </p>
        </div>
      </div>

      <div className="box-blur box-blur1 max-w-4xl m-auto text-center">
        <div className="flex items-center justify-center gap-4 mt-8 mb-4">
          {logos.map((logo, index) => (
            <img src={logo} key={index} />
          ))}
        </div>

        <p className="text-white">Supports almost every programming language</p>

        <MidCTA
          title="Truly universal, runs everywhere & fast as native"
          subtitle="See more info about Runtime"
        />
      </div>

      <div className="mt-16 text-center">
        <p className="font-22 max-w-screen-md mx-auto">
          “This programming tool makes it easier for apps to work anywhere”
        </p>

        <img src="/imgs/vercel.svg" className="mx-auto opacity-50" />
      </div>
    </div>
    </motion.div>
  )
}

export default Explore
