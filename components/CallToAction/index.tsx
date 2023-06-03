import React from "react"
import Link from "next/link"
import { Typography } from "antd"
import { LargeCallToActionProps,MidCallToActionProps } from "@/types/data"

const { Title } = Typography


export const LargeCallToAction: React.FC<LargeCallToActionProps> = ({
  title = "",
  subtitle = "",
  className
}) => {
  return (
    <div className={`${className} lg:p-16 md:p-8 bg-black text-white rounded-lg`}>
      <Title level={4} className="text-white text-left">
        {title}
      </Title>
      <p>{subtitle}</p>
      <div className="flex justify-end">
        <img src="/Logo/app.svg" alt="CTA" />
      </div>
    </div>
  )
}



export const MidCallToAction: React.FC<MidCallToActionProps> = ({
  title = " ",
  subtitle = null,
  className,
}) => {
  return (
    <div className={`${className}  md:p-8 bg-black text-white rounded-lg`}>
      <div className="flex 	">
        <div className="flex-1 flex flex-col items-start justify-center">
          <span className="text-white text-2xl mb-2 text-left">{title}</span>
          {subtitle ? (
            <Link href="#" className="text-white font-normal text-sm">
              See more info about Runtime
            </Link>
          ) : null}
        </div>
        <div className="flex justify-end">
          <img src="/Logo/app.svg" alt="CTA" />
        </div>
      </div>
    </div>
  );
}
