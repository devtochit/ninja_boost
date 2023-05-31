import React from "react";
import dynamic from 'next/dynamic';

import { TypingText } from "@/components/CustomTexts";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import { PrimaryButton } from "../components/Buttons";

export default function Community() {
  return (
    <div className="container flex">
      <div className="font-semibold  text-black max-w-3xl mx-auto pt-10">
        <div className="flex flex-col text-center items-center gap-6 flex-wrap">
        <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    > 
     <TypingText title="| About Metaversus" textStyles="text-center" />

<motion.p
  variants={fadeIn('up', 'tween', 0.1, 1)}
  className="mt-8 font-normal sm:text-[32px] font-48  text-center "
>
  <span className="font-extrabold font-48  ">Metaverse</span> is a new
  thing in the future, where you can enjoy the virtual world by feeling
  like it's really real, you can feel what you feel in this metaverse
  world, because this is really the{' '}
  <span  className="font-extrabold font-48 ">
    madness of the metaverse
  </span>{' '}
  of today, using only{' '}
  <span className="font-extrabold font-48 ">VR</span> devices you can
  easily explore the metaverse world you want, turn your dreams into
  reality. Let's{' '}
  <span className="font-extrabold font-48 ">explore</span> the madness
  of the metaverse by scrolling down
</motion.p>

    
    </motion.div>
          {/* <div className="flex gap-8  baseline ">  
          <span className="font-semibold font-48 text-center leading-5 ">Create apps that</span>
          <PrimaryButton
            text="Run"
            icon={<img src="/Logo/register.png" width="35" />}
            size="large"
            className="  "
          />
          <TypingText title="everywhere." textStyles="leading-5 font-48" />
          </div>

          <div className="flex gap-8 baseline justify-center">  
            <PrimaryButton
            text="Registry"
            icon={<img src="/Logo/register.png" width="35" />}
            size="large"
          />
          <span className="font-48 leading-5 ">and share with the community</span>
          </div>

          <div className="flex gap-8 baseline">  
          <span className="font-48 ">and</span>
                  <PrimaryButton
                    text="Edge"
                    icon={<img src="/Logo/edge.png" width="35" />}
                    size="large"
                    />
                  <TypingText title="to the edge, globally." textStyles="text-normal leading-5  font-48" />

          </div> */}

        </div>
      </div>
    </div>
  );
}
