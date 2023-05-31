"use client"

import { useEffect, useState } from "react"
import { Spin, Typography } from "antd"
import { motion } from 'framer-motion';

import { PrimaryButton } from "@/components/Buttons"
import { LargeCTA, MidCTA } from "@/components/CTA"
import HomeSlider from "@/components/Carousel/home"
import { fadeIn, staggerContainer } from '@/utils/motion';
import styles from "@/styles";


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
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>

    <div className="">
      <div className="container z-20 text-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src="/Logo/section.svg" width={`1.4px`} />
          <PrimaryButton
            text="Registry"
            icon={<img src="/Logo/register.png" width="25" />}
            size="large"
          />

          <Title className="mt-10 text-48">Better together</Title>
          <p className="font-22 mb-4 max-w-screen-md mx-auto ">
            Packages are limited by their languages no more. Collaborate across <br />
            stacks, leverage all and contribute your own.
          </p>
        </div>
      </div>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative  flex flex-col w-full "
      >

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

        <img src="/Logo/vercel.svg" className="mx-auto opacity-50" />
      </div>
      </motion.div>
    </div>
    </motion.div>
</section>
  )
}

export default Explore3
