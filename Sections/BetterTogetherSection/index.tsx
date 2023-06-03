"use client"

import { useEffect, useState } from "react"
import { Typography } from "antd"
import { PrimaryButton } from "@/components/Buttons/index1"
import {  MidCallToAction } from "@/components/CallToAction"
import { fadeIn, } from '@/utils/motion';
import styles from "@/styles";
import { CustomPrimaryButton } from "@/components/Buttons";
import Image from "next/image"
import {motion,Variants} from "framer-motion"
import BetterSlider from "@/components/Slider/BetterSlider"


const { Title } = Typography

function BetterTogetherSection() {
  const staggerContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0,
        delayChildren: 0,
      },
    },
  };
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>

    <div className="">
      <div className="container z-20 text-center px-10">
        <div className={`${styles.flexCenter} flex-col  gap-4  justify-center`}>
        <Image src="/Logo/section.svg" width={1} height={1} alt="section" /> 
          <CustomPrimaryButton
            buttonText="Registry"
            icon={<img src="/Logo/publish.png" width="25" />}
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

      <div className="background-blur mainblur">
        <div className="custommargin">
          <BetterSlider speed={2000} />
        </div>

        <div className="max-w-4xl m-auto text-center px-16">
          <MidCallToAction
            title="All languages, fully containerized & collaborative"
            subtitle="See more info about Runtime"
            className=''
          />
        </div>
      </div>

      <div className="container mt-16 text-center">
        <p className="font-22 max-w-screen-md mx-auto">
          “This programming tool makes it easier for apps to work anywhere”
        </p>

        <Image src="/Logo/vercel.svg" className="mx-auto opacity-50" width={136} height={32} alt="logo"/>
      </div>
      </motion.div>
    </div>
    </motion.div>
</section>
  )
}

export default BetterTogetherSection
