"use client"

import { NextPage } from "next"
import { Typography } from "antd"

import { GithubButton } from "../Buttons/index1"
import Slider from "../Carousel/slick"
import { EditorTabsetComponentWithOpts } from "../CodeEditor"

const { Title } = Typography

export const HeroSlider: NextPage = () => {
  return (
    <div className="heroslider">
      <div className="herocontent flex flex-col items-stretch justify-center gap-4 relative px-4 py-12 max-w-xl mx-auto">
        <Title className="font-semibold text-52 text-center">
          Run, Publish & Deploy <br />
          any code – anywhere
        </Title>

        <div className="max-w-lg mx-auto blur-effect">
          <EditorTabsetComponentWithOpts title={null} extra={false} />
        </div>

        <div className="text-center flex justify-center items-center gap-2 flex-col">
          <p className="font-22 mt-4">
            Serve sandboxed WebAssembly apps anywhere through a single runtime
            and do in days what others do in months.
          </p>

          <p className="font-22 font-semibold text-black">
            Reach for the stars, we do too.
          </p>

          <GithubButton size="large" />
        </div>
      </div>

      <div className="icons-section">
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
