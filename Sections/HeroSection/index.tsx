"use client"

import { Typography } from "antd"
import { GithubButton } from "@/components/Buttons"
import Slider from "@/components/Carousel/try"
import CustomEditorComponent from "@/components/Editor"
import { TypingText } from "@/components/CustomTexts"
import { motion } from 'framer-motion';
import { fadeIn,staggerContainer } from "@/utils/motion"
import styles from "@/styles"



const { Title } = Typography

const HeroSection = () => {
  return (
    <div className="herosection ">
      <div className="titleshift">
        <Title className="font-semibold   text-[52px] text-center ">
          Run, Publish & Deploy <br />
          any code – anywhere
        </Title>
      </div>

      <div className="herocontent  max-w-xl mx-auto flex flex-col mt-5 items-stretch justify-center gap-4 relative px-4 pt-10">
        <div className="max-w-lg mx-auto  blur-effect">
          <CustomEditorComponent title={null} extra={false} />
        </div>
        <div className="text-center flex mt-4 justify-center items-center gap-2 flex-col">
          <p className="mt-4">
            Serve sandboxed WebAssembly apps anywhere through a single runtime
            <TypingText title="and do in days what others do in months." textStyles=""/>
            
          </p>
          <p className="font-semibold text-lg text-black">
            Reach for the stars, we do too.
          </p>
         
          <GithubButton size="large" />
        </div>
      </div>

      <div className="brandicons-section">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <Slider slidesToShow={7} labeled={true} rtl={true} speed={4000} />
            <Slider
              slidesToShow={7}
              labeled={true}
              rtl={true}
              speed={4500}
              initialSlide={9}
            />
            <Slider
              slidesToShow={7}
              labeled={true}
              rtl={true}
              speed={5000}
              initialSlide={18}
            />
          </div>
          <div className="col-span-1">
            <Slider slidesToShow={10} rtl={false} speed={4500} />
            <Slider
              slidesToShow={10}
              rtl={false}
              speed={5500}
              initialSlide={9}
            />
            <Slider
              slidesToShow={10}
              rtl={false}
              speed={6500}
              initialSlide={18}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
