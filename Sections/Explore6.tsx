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

const { Title } = Typography

function Explore6() {
  return (
    <div className="container">
      <div className=" py-10 text-center">
        <div className=" mb-2 flex flex-col gap-4 items-center justify-center ">
          <p className="mt-4 font-22 font-semibold text-black">
            We are trusted by the best
          </p>
          <p className="font-22 mt-4  max-w-screen-md mx-auto">
            “This programming tool makes it easier for apps to work anywhere”
          </p>

          <img src="/imgs/vercel.svg" className="mx-auto opacity-50" />
        </div>
      </div>

      <div className="max-w-4xl m-auto text-left pt-12 pb-20">
        <div className="blur-effect z-10">
          <LargeCTA
            title="Get started"
            subtitle="Join the vibrant Wasmer community. Create your fist package, run it from the shell and deploy it to the Edge"
          />
        </div>
      </div>
    </div>
  )
}

export default Explore6
