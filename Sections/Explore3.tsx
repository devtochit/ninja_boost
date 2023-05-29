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

import { PrimaryButton } from "@/components/Buttons"
import { LargeCTA, MidCTA } from "@/components/CTA"
import HomeSlider from "@/components/Carousel/home"

const logos = [
  "/Logo/brandIcons/white/logo1.svg",
  "/Logo/brandIcons/white/logo2.svg",
  "/Logo/brandIcons/white/logo3.svg",
  "/Logo/brandIcons/white/logo4.svg",
  "/Logo/brandIcons/white/logo5.svg",
]
const { Title } = Typography

function Explore3() {
  return (
    <div className="">
      <div className="container z-20 text-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src="/imgs/section.svg" width={`1.4px`} />
          <PrimaryButton
            text="Registry"
            icon={<img src="/imgs/register.png" width="25" />}
            size="middle"
          />

          <Title className="mt-4 text-48">Better together</Title>
          <p className="font-22 max-w-screen-md mx-auto">
            Packages are limited by their languages no more. Collaborate across
            stacks, leverage all and contribute your own.
          </p>
        </div>
      </div>

      <div className="box-blur box-blur2">
        <div className="mb-8">
          <HomeSlider speed={2000} />
        </div>

        <div className="max-w-4xl m-auto text-center px-4">
          <MidCTA
            title="All languages, fully containerized & collaborative"
            subtitle="See more info about Runtime"
          />
        </div>
      </div>

      <div className="container mt-16 text-center">
        <p className="font-22 max-w-screen-md mx-auto">
          “This programming tool makes it easier for apps to work anywhere”
        </p>

        <img src="/imgs/vercel.svg" className="mx-auto opacity-50" />
      </div>
    </div>
  )
}

export default Explore3
