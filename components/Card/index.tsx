import React, { ReactNode } from "react"
import Link from "next/link"
import { Divider } from "antd"
import * as Icon from "react-feather"

import LargeCard from "../Card/large"

interface CustomCardProps {
  title?: string | JSX.Element
  link?: string
  content?: string
}

export const CustomCard: React.FC<CustomCardProps> = ({
  title = "Title",
  link = "#",
  content = "Content",
}) => {
  return (
    <LargeCard
      title={title}
      extra={true}
      extraHTML={
        <Link href={link} className="hover:text-black">
          <Icon.ArrowUpRight
            size={18}
            className="font-semibold bg-transparent"
          />
        </Link>
      }
      content={
        <div className="card-content relative ">
          <p className="text-gray-500  ">{content}</p>

        <div className="flex items-center gap-4 text-gray-500  lg:mt-6 fixed bottom-3 ">
            <Icon.BookOpen size={16} />

            <Divider type="vertical" className="border-black" />

            <div className="likes flex flex-row gap-2 justify-center items-center">
              <Icon.Heart size={16} />
              <span>524</span>
            </div>

            <div className="likes flex flex-row gap-2 justify-center items-center">
              <Icon.Download size={16} />
              <span>524</span>
            </div>
          </div> 
        </div>
      }
    />
  )
}
