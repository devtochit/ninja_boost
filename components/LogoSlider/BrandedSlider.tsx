import Image from "next/image"
import React from "react";
import {ImagesLoop}  from '@/lib/data'

const BrandedSlider: React.FC = () => {
  return (
    <>
      <div className="flex flex-nowrap gap-4 overflow-x-scroll">
        {ImagesLoop.map((img, index) => (
          <Image width={100} alt="images" height={100} src={img} key={index} />
        ))}
      </div>
    </>
  )
}

export default BrandedSlider
