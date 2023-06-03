"use client"

import {  Typography } from "antd"
import { staggerContainer, fadeIn, CloudsVariants } from '../../utils/motion';
import Image from "next/image"
import {motion,Variants} from "framer-motion"
import { MidCallToAction } from "@/components/CallToAction"
import styles from "@/styles";
import { CustomPrimaryButton } from "@/components/Buttons";
const { Title } = Typography

function AbovetheCloud() {
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
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >

    <div className="container">
      <div className="z-20 text-center">
        <div className={`${styles.flexCenter} flex-col  gap-2  justify-center`}>
        <Image src="/Logo/section.svg" width={1} height={1} alt="section" /> 
          <CustomPrimaryButton
            buttonText="Edge"
            icon={<Image src="/Logo/community.png" width={25} height={25}  alt="edge"/>}
            size="large"
          />

          <Title className="mt-4 text-48">Above the clouds</Title>
          <p className="font-22 max-w-screen-md mx-auto">
            Get the scalability of serverless and the reusability of cloud.
            Deploy to <br /> the edge, save your users time and yourself money.{" "}
          </p>
        </div>
      </div>
      <motion.div
        variants={CloudsVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      > 
      <img src="/Logo/cloud.svg" className="mx-auto" alt="cloudimg" />
      

      </motion.div>
      <div className="background-blur main-blurcloud max-w-4xl m-auto text-center">
        <div className={`${styles.flexCenter} col justify-center gap-4 mt-8 mb-4`}>
        <div className={`${styles.flexCenter} gap-4 justify-content`}>
            <Image src="/Logo/spare.svg" width={20} height={20} alt="tone" />
            <div className="text-white flex-1">Infinite scalability</div>
          </div>
          <div className={`${styles.flexCenter} gap-4 justify-content`}>
            <Image src="/Logo/flames.svg" width={20} height={20} alt="fire" />
            <div className="text-white flex-1">Instant cold starts</div>
          </div>
        </div>

        <MidCallToAction className="" title="Faster, cheaper & indefinitely scalable" />
      </div>

      <div className="mt-16 smallmargin text-center">
        <p className="font-22 max-w-screen-md mx-auto">
          “This programming tool makes it easier for apps to work anywhere”
        </p>

        <Image src="/Logo/vercel.svg" className="mx-auto opacity-50" width={136} height={32} alt="logo"/>
      </div>
    </div>
    </motion.div>
    </section>
  )
}

export default AbovetheCloud
