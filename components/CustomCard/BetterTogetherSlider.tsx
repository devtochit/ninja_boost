import React, { ReactNode } from "react"
import Link from "next/link"

import * as Icon from "react-feather"

import CustomAntCard from "./CustomAntCard"
import { Separator } from "../ui/separator"
import styles from "@/styles"
import { ArrowUpRight,BookOpenCheck,Heart,Download} from "lucide-react"



interface BetterTogetherSliderProps {
  title?: string | JSX.Element
  content?: string
}

export const BetterTogetherSlider: React.FC<BetterTogetherSliderProps> = ({title, content}) => {
  return (
    <CustomAntCard
      title={title}
      extra={true}
      extraHTML={
        <Link href={'#'} className="hover:text-black">
          <ArrowUpRight
            size={18}
            className="font-semibold bg-transparent"
          />
         </Link>
      }
      content={
        <div className="card-content relative ">
       <p className="text-gray-500  ">{content}</p>

        <div className="flex items-center gap-4 text-gray-500  lg:mt-6 fixed bottom-3 ">
            <BookOpenCheck size={18} />

            <Separator orientation="vertical" className="border-black" />

            <div className={`${styles.flexCenter}flex-row gap-2`}>
              <Heart size={18} />
              <span>524</span>
            </div>

            <div className={`${styles.flexCenter}flex-row gap-2`}>
              <Download size={18} />
              <span>524</span>
            </div>
          </div>  
        </div>
      }
    />
  )
}
