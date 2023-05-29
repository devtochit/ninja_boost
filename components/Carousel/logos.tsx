import React from "react"

const Carousel: React.FC = () => {
  const imgs: string[] = [
    "/Logo/brandIcons/logo1.svg",
    "/Logo/brandIcons/logo2.svg",
    "/Logo/brandIcons/logo3.svg",
    "/Logo/brandIcons/logo4.svg",
    "/Logo/brandIcons/logo5.svg",
    "/Logo/brandIcons/logo6.svg",
    "/Logo/brandIcons/logo7.svg",
    "/Logo/brandIcons/logo8.svg",
    "/Logo/brandIcons/logo9.svg",
    "/Logo/brandIcons/logo10.svg",
    "/Logo/brandIcons/logo11.svg",
    "/Logo/brandIcons/logo12.svg",
    "/Logo/brandIcons/logo13.svg",
    "/Logo/brandIcons/logo14.svg",
    "/Logo/brandIcons/logo15.svg",
    "/Logo/brandIcons/logo16.svg",
    "/Logo/brandIcons/logo17.svg",
    "/Logo/brandIcons/logo18.svg",
    "/Logo/brandIcons/logo19.svg",
    "/Logo/brandIcons/logo20.svg",
    "/Logo/brandIcons/logo21.svg",
    "/Logo/brandIcons/logo22.svg",
    "/Logo/brandIcons/logo23.svg",
    "/Logo/brandIcons/logo24.svg",
    "/Logo/brandIcons/logo25.svg",
    "/Logo/brandIcons/logo26.svg",
  ]

  return (
    <>
      <div className="flex flex-nowrap gap-4 overflow-x-scroll">
        {imgs.map((img, index) => (
          <img width={100} src={img} key={index} />
        ))}
      </div>
    </>
  )
}

export default Carousel
