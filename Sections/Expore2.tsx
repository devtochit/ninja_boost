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
import { TypingText } from "@/components/CustomTexts";
const logos = [
  "/Logo/brandIcons/whitebrandIcon/brandlogo1.svg",
  "/Logo/brandIcons/whitebrandIcon/brandlogo2.svg",
  "/Logo/brandIcons/whitebrandIcon/brandlogo3.svg",
  "/Logo/brandIcons/whitebrandIcon/brandlogo4.svg",
  "/Logo/brandIcons/whitebrandIcon/brandlogo5.svg",
]
const { Title } = Typography

function Expore2() {
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
        <div className={`${styles.flexCenter} flex-col gap-10 justify-center`}>
           <img src="/Logo/section.svg" width={`1.4px`} /> 
          <PrimaryButton
            text="Runtime"
            icon={<img src="/Logo/runtime.png" width="25" />}
            size="large"
          /> 

          <Title className="mt-4 text-48">Run the world</Title>
          <p className="custommarginbottom font-22 max-w-screen-md mx-auto leading-4">
            Using a binary for each platform and chip is the past. Rise above
            with <br /> lightweight containerized apps that simply run everywhere.
          </p>
        </div>
      </div>

      <div className="box-blur box-blur1 max-w-4xl m-auto text-center">
      <div className=" rundeyworldmobile">  
        <div className=" flex-wrap flex lg:flex-row items-center justify-center gap-4 mt-8 mb-4">
          {logos.map((logo, index) => (
            <img src={logo} key={index} />
          ))}
        </div>

        <p className=" custommargin text-white">Supports almost every programming language</p>
    </div>
        <MidCTA
          title="Truly universal, runs everywhere & fast as native"
          subtitle="See more info about Runtime"
        />
      </div>

      <div className="mt-16 text-center smallmargin">
        <p className=" mt-10  font-22 max-w-screen-md mx-auto">
          “This programming tool makes it easier for apps to work anywhere”
        </p>

        <img src="/Logo/vercel.svg" className="  mx-auto opacity-50" />
      </div>  
    </div>
    </motion.div>
  )
}

export default Expore2
