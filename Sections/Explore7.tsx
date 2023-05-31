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
  "/Logo/brandIcons/white/logo1.svg",
  "/Logo/brandIcons/white/logo2.svg",
  "/Logo/brandIcons/white/logo3.svg",
  "/Logo/brandIcons/white/logo4.svg",
  "/Logo/brandIcons/white/logo5.svg",
]
const { Title } = Typography

function Expore7() {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
  >
    <div className= " container">
      <div className=" py-10 text-center">
        <div className="flex flex-col gap-10 items-center justify-center">
        <p className="mt-4 font-22 font-semibold text-black">
            We are trusted by the best
          </p>        <div className="custommarginbottom text-center">
        <p className=" mt-10  font-22 max-w-screen-md mx-auto">
          “This programming tool makes it easier for apps to work anywhere”
        </p>

        <img src="/Logo/vercel.svg" className="  mx-auto opacity-50 mb-5" />
      </div>  
        </div>
      </div>
      <div className="max-w-4xl m-auto text-left pt-12 pb-20">
      <div className=" blur-effect  z-10">
        <LargeCTA
          title="Get Started"
          subtitle="Join the vibrant Wasmer community. Create your fist package, run it from the shell and deploy it to the Edge"
        />
    </div>
      </div>
     
     
    
    </div>
    </motion.div>
  )
}

export default Expore7
