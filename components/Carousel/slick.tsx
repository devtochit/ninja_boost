"use client"

import React, { useEffect } from "react"
import { Typography } from "antd"
import {
  AnimatePresence,
  motion,
  stagger,
  useAnimate,
  usePresence,
} from "framer-motion"
import Slider from "react-slick"

const { Text } = Typography

interface Logo {
  label: string | null
  value: string
}

interface LogoSliderProps {
  rtl?: boolean
  initialSlide?: number
  speed?: number
  labeled?: boolean
  slidesToShow?: number
}

const imgs: Logo[] = [
  {
    label: "SpiderMonkey",
    value: "/Logo/brandIcons/logo1.svg",
  },
  {
    label: "Ruby",
    value: "/Logo/brandIcons/logo2.svg",
  },
  {
    label: "sqlite",
    value: "/Logo/brandIcons/logo3.svg",
  },
  {
    label: "wordpress",
    value: "/Logo/brandIcons/logo4.svg",
  },
  {
    label: "python",
    value: "/Logo/brandIcons/logo5.svg",
  },
  {
    label: "bash",
    value: "/Logo/brandIcons/logo6.svg",
  },
  // {
  //     label: null,
  //     value:  "/Logo/brandIcons/logo7.svg"
  // },
  // {
  //     label: null,
  //     value:  "/Logo/brandIcons/logo8.svg"
  // },
  // {
  //     label: null,
  //     value:  "/Logo/brandIcons/logo9.svg"
  // },
  // {
  //     label: null,
  //     value:  "/Logo/brandIcons/logo10.svg"
  // },
  {
    label: "namespace",
    value: "/Logo/brandIcons/logo11.svg",
  },
  {
    label: "Tantivy",
    value: "/Logo/brandIcons/logo12.svg",
  },
  {
    label: "Javascript",
    value: "/Logo/brandIcons/logo13.svg",
  },
  {
    label: "PHP",
    value: "/Logo/brandIcons/logo14.svg",
  },
  {
    label: "Lua",
    value: "/Logo/brandIcons/logo15.svg",
  },
  {
    label: "Go",
    value: "/Logo/brandIcons/logo16.svg",
  },
  {
    label: "Docker",
    value: "/Logo/brandIcons/logo17.svg",
  },
  {
    label: "Safari",
    value: "/Logo/brandIcons/logo18.svg",
  },
  {
    label: "Chrome",
    value: "/Logo/brandIcons/logo19.svg",
  },
  {
    label: "Rust",
    value: "/Logo/brandIcons/logo20.svg",
  },
  {
    label: "Arc",
    value: "/Logo/brandIcons/logo21.svg",
  },
  {
    label: "Opera",
    value: "/Logo/brandIcons/logo22.svg",
  },
  {
    label: "C++",
    value: "/Logo/brandIcons/logo23.svg",
  },
  {
    label: "Android",
    value: "/Logo/brandIcons/logo24.svg",
  },
  {
    label: "C",
    value: "/Logo/brandIcons/logo25.svg",
  },
  {
    label: "WASI",
    value: "/Logo/brandIcons/logo26.svg",
  },
]

const LogoSlider: React.FC<LogoSliderProps> = ({
  rtl = false,
  initialSlide = 0,
  speed = 1500,
  labeled = false,
  slidesToShow = 5,
}) => {
  const [scope, animate] = useAnimate()
  const [isPresent] = usePresence()

  const settings = {
    dots: false,
    infinite: true,
    speed,
    slidesToShow, // Number of items to display at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Speed at which the slider moves
    pauseOnHover: false,
    rtl,
    initialSlide,
  }

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          "img",
          { opacity: [0, 1] },
          { duration: 0.2, delay: stagger() }
        )
      }
      enterAnimation()
    }
  }, [isPresent])

  return (
    <AnimatePresence>
      {isPresent && (
        <div ref={scope}>
          <Slider {...settings}>
            {imgs.map((img, index) => (
              <motion.div
                key={index}
                className="animated-logos h-full w-full my-2"
              >
                <div
                  className={`shadow rounded-lg flex items-center ${
                    labeled ? `justify-start` : `justify-center`
                  } flex-nowrap gap-0 mx-0 h-full overflow-hidden`}
                >
                  <motion.img
                    src={img.value}
                    alt="Logo"
                    width={`50px`}
                    whileHover={{ scale: 1.1 }}
                  />
                  {!labeled ? null : (
                    <motion.div className="flex-1">
                      <Text className="text-center text-black text-sm m-0 break-keep pr-2">
                        {img.label}
                      </Text>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      )}
    </AnimatePresence>
  )
}

export default LogoSlider
