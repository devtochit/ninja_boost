import React, { useEffect } from "react"
import { Typography } from "antd"
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion"
import Slider from "react-slick"

import { BrandLogo } from "@/lib/data"

import { LogoSliderProps } from "../../types/data"

const { Text } = Typography

const LogoSlider: React.FC<LogoSliderProps> = ({
  rtl = false,
  initialSlide = 0,
  speed = 1500,
  labeled = false,
  slidesToShow = 5,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    rtl,
    initialSlide,
  }

  const [scope, animate] = useAnimate()

  useEffect(() => {
    const enterAnimation = async () => {
      await animate(
        ".logo-image",
        { opacity: [0, 1] },
        { duration: 0.2, delay: stagger() }
      );
      
    }
    enterAnimation()
  }, [])

  return (
    <AnimatePresence>
      <Slider {...settings} className="flex flex-wrap justify-between   my-4">
        {BrandLogo.map(({ label, value }, index) => (
          <div
            key={index}
            className={`opacitated-logos   ${
              labeled ? "w-[250px] h-[61px]   " : "w-[61px] h-[61px]"
            } flex bg-white  my-2  rounded-[15px] w-full mx-2`}
          >
            <div
              className={`shadow flex items-center ${
                labeled ? "justify-around items-center  " : "justify-center"
              } h-full overflow-hidden`}
            >
              <motion.img
                src={value}
                alt="Logo"
                className="w-9 logo-image h-18 shadow-sm"
                whileHover={{ scale: 1.1 }}
              />
              {!labeled ? null : (
                <motion.div className="">
                  <Text
                    className="text-center text-[#0F0518] text-[12px] m-0 break-keep"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </Text>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </AnimatePresence>
  )
}

export default LogoSlider
