"use client"

import { useEffect, useState } from "react"
import { Typography } from "antd"
import {motion,Variants} from "framer-motion"
import { fadeIn,staggerContainer } from "@/utils/motion"
import styles from "@/styles"
import { PrimaryButton } from "@/components/Buttons/index1"
import {MidCallToAction } from "@/components/CallToAction"
import { TypingText } from "@/components/CustomTexts";
import { CustomPrimaryButton } from "@/components/Buttons"
import Image from "next/image"
import {brandImages} from '@/lib/data'


const { Title } = Typography

function RunWorldSection() {
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
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
  >
    <div className= "relative container">
      <div className="z-20 text-center">
        <div className={`${styles.flexCenter} flex-col gap-2 justify-center`}>
           <Image src="/Logo/section.svg" width={1} height={1} alt="section" /> 
          <CustomPrimaryButton
            buttonText="Runtime"
            icon={<img src="/Logo/global.png" width="25" />}
            size="large"
          /> 

          <Title className="mt-4 text-48">Run the world</Title>
          <p className="custommarginbottom font-22 max-w-screen-md mx-auto leading-8">
            Using a binary for each platform and chip is the past. Rise above
            with <br /> lightweight containerized apps that simply run everywhere.
          </p>
        </div>
      </div>

      <div className="background-blur runworld-blur max-w-4xl m-auto text-center">
      <div className=" rundeyworldmobile">  
        <div className=" flex-wrap flex lg:flex-row items-center justify-center gap-4 mt-8 mb-4">
          {brandImages.map((logo, index) => (
            <img src={logo} key={index} />
          ))}
        </div>

        <p className=" custommargin text-white">Supports almost every programming language</p>
    </div>
        <MidCallToAction
          title="Truly universal, runs everywhere & fast as native"
          subtitle="See more info about Runtime"
        />
      </div>

      <div className="mt-16 text-center smallmargin">
        <p className=" mt-10  font-22 max-w-screen-md mx-auto">
          “This programming tool makes it easier for apps to work anywhere”
        </p>

        <Image src="/Logo/vercel.svg" className="mx-auto opacity-50" width={136} height={32} alt="logo"/>
      </div>  
    </div>
    </motion.div>
  )
}

export default RunWorldSection
