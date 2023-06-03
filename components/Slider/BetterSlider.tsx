import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "react-slick";
import { BetterTogetherSlider } from "../CustomCard/BetterTogetherSlider";

const BetterSlider = ({speed = 1000}) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of items to display at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Speed at which the slider moves
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1152, // Adjust the breakpoint value based on your needs
        settings: {
          slidesToShow: 2, // Number of items to show on screens with width <= 1024px
        },
      },
      {
        breakpoint: 600, // Adjust the breakpoint value based on your needs
        settings: {
          slidesToShow: 1, // Number of items to show on screens with width <= 768px
        },
      },
    ],
  };

  useEffect(() => {
    const matchSlideHeight = () => {
      const slides = document.querySelectorAll(
        ".background-blur .mainblur .slick-slide > div"
      );
      let maxHeight = 0;

      slides.forEach((slide) => {
        slide.style.height = "";

        const slideHeight = slide.offsetHeight;
        maxHeight = Math.max(maxHeight, slideHeight);
      });

      slides.forEach((slide) => {
        slide.style.height = `${maxHeight}px`;
      });
    };

    matchSlideHeight();
  }, []);

  useEffect(() => {
    const enterAnimation = async () => {
      const imgElements = sliderRef.current.querySelectorAll("img");

      await Promise.all(
        Array.from(imgElements).map((img, index) =>
          motion(img, { opacity: [0, 1] }, { duration: 0.2, delay: index * 0.1 })
        )
      );
    };

    enterAnimation();
  }, []);

  return (
    <AnimatePresence>
      <div ref={sliderRef}>
        <Slider {...settings}>
          <div className="px-4 h-full">
            <BetterTogetherSlider
              title={
                <div className="flex items-center gap-4">
                  <img src="/Logo/mozila.svg" alt="icon" />
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold">mozilla</span>
                    <span className="text-gray-500">/</span>
                    <span className="font-semibold">spidermonkey</span>
                  </div>
                </div>
              }
              content="SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects."
            />
          </div>

          <div className="px-4 h-full">
            <BetterTogetherSlider
              title={
                <div className="flex items-center gap-4">
                  <img src="/Logo/brandIcons/brandlogo3.svg" alt="icon" />
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold">sqlite</span>
                    <span className="text-gray-500">/</span>
                    <span className="font-semibold">sqlite</span>
                  </div>
                </div>
              }
              content="SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine"
            />
          </div>

          <div className="px-4 h-full">
            <BetterTogetherSlider
              title={
                <div className="flex items-center gap-4">
                  <img src="/Logo/brandIcons/brandlogo11.svg" alt="icon" />
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold">syrusakbary</span>
                    <span className="text-gray-500">/</span>
                    <span className="font-semibold">r2</span>
                  </div>
                </div>
              }
              content="cowsay is a program that generates ASCII pictures of a cow with a message"
            />
          </div>
        </Slider>
      </div>
    </AnimatePresence>
  );
};

export default BetterSlider;
