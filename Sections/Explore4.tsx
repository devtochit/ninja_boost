"use client"

import { useEffect, useState } from "react"
import { Spin, Typography } from "antd"
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

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
import styles from "@/styles";
const { Title } = Typography
function Explore4() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >

    <div className="container">
      <div className="z-20 text-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src="/Logo/section.svg" width={`1.4px`} />
          <PrimaryButton
            text="Edge"
            icon={<img src="/Logo/edge.png" width="25" />}
            size="middle"
          />

          <Title className="mt-4 text-48">Above the clouds</Title>
          <p className="font-22 max-w-screen-md mx-auto">
            Get the scalability of serverless and the reusability of cloud.
            Deploy to <br /> the edge, save your users time and yourself money.{" "}
          </p>
        </div>
      </div>
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      > 
      <img src="/Logo/cloudimg.svg" className="mx-auto" />
      </motion.div>
      <div className="box-blur box-blur3 max-w-4xl m-auto text-center">
        <div className="flex items-center justify-center gap-4 mt-8 mb-4">
          <div className="flex items-center gap-4 justify-content">
            <img src="/Logo/tone.svg" />
            <div className="text-white flex-1">Infinite scalability</div>
          </div>
          <div className="flex items-center gap-4 justify-content">
            <img src="/Logo/fire.svg" />
            <div className="text-white flex-1">Instant cold starts</div>
          </div>
        </div>

        <MidCTA title="Faster, cheaper & indefinitely scalable" />
      </div>

      <div className="mt-16 text-center">
        <p className="font-22 max-w-screen-md mx-auto">
          “This programming tool makes it easier for apps to work anywhere”
        </p>

        <img src="/Logo/vercel.svg" className="mx-auto opacity-50" />
      </div>
    </div>
    </motion.div>
    </section>
  )
}

export default Explore4
