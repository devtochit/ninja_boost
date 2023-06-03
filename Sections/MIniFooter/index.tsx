"use client"

import { useEffect, useState } from "react"
import { Spin, Typography } from "antd"
import {
  AnimatePresence,
  Variants,
  motion,
  stagger,
  useAnimate,
  useInView,
  usePresence,
} from "framer-motion"
import { fadeIn,staggerContainer } from "@/utils/motion"
import styles from "@/styles"
import { LargeCallToAction } from "@/components/CallToAction"
import { TypingText } from "@/components/CustomTexts";

const { Title } = Typography

function MIniFooter() {
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
    <div className= " container">
      <div className=" py-10 text-center">
        <div className={` ${styles.flexCenter} flex-col gap-10  justify-center`}>
      <div className="flex gap-1"> 
      <p className="mt-4 font-22 font-semibold text-black" >  We are trusted </p>
            <TypingText title=" by the best " textStyles="mt-4 font-22 font-semibold text-black" />
      </div>
             <div className="custommarginbottom text-center">
        <p className=" mt-10  font-22 max-w-screen-md mx-auto">
          “This programming tool makes it easier for apps to work anywhere”
        </p>

        <img src="/Logo/vercel.svg" className="  mx-auto opacity-50 mb-5" />
      </div>  
        </div>
      </div>
      <div className="max-w-4xl m-auto text-left pt-12 pb-20">
      <div className=" blur-effect  z-10">
        <LargeCallToAction
          title="Get Started"
          subtitle="Join the vibrant Wasmer community. Create your fist package, run it from the shell and deploy it to the Edge"
        />
    </div>
      </div>
     
     
    
    </div>
    </motion.div>
  )
}

export default MIniFooter
