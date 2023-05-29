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
function Explore4() {
  return (
    <div className="container">
      <div className="z-20 text-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src="/imgs/section.svg" width={`1.4px`} />
          <PrimaryButton
            text="Edge"
            icon={<img src="/imgs/edge.png" width="25" />}
            size="middle"
          />

          <Title className="mt-4 text-48">Above the clouds</Title>
          <p className="font-22 max-w-screen-md mx-auto">
            Get the scalability of serverless and the reusability of cloud.
            Deploy to the edge, save your users time and yourself money.{" "}
          </p>
        </div>
      </div>

      <img src="/imgs/cloudimg.svg" className="mx-auto" />

      <div className="box-blur box-blur3 max-w-4xl m-auto text-center">
        <div className="flex items-center justify-center gap-4 mt-8 mb-4">
          <div className="flex items-center gap-4 justify-content">
            <img src="/imgs/tone.svg" />
            <div className="text-white flex-1">Infinite scalability</div>
          </div>
          <div className="flex items-center gap-4 justify-content">
            <img src="/imgs/fire.svg" />
            <div className="text-white flex-1">Instant cold starts</div>
          </div>
        </div>

        <MidCTA title="Faster, cheaper & indefinitely scalable" />
      </div>

      <div className="mt-16 text-center">
        <p className="font-22 max-w-screen-md mx-auto">
          “This programming tool makes it easier for apps to work anywhere”
        </p>

        <img src="/imgs/vercel.svg" className="mx-auto opacity-50" />
      </div>
    </div>
  )
}

export default Explore4
