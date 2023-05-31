import React from "next"
import Link from "next/link"
import { Divider, Typography } from "antd"
import * as Icon from "react-feather"

const { Title, Text } = Typography

interface CustomHeaderProps {
  title?: String
  subtitle?: String
  icon?: Boolean
  level?: Number
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title = "Title",
  subtitle = null,
  icon = true,
  level = 2,
}) => {
  return (
    <div className="mx-auto">
      <Divider className="m-0" />

      <div className="container">
        <div className="flex items-center justify-between">
          <div className="components-header flex gap-4 items-center">
            {icon ? (
              <div className="w-16 h-16 bg-gray flex items-center justify-center rounded-full">
                <img src="/imgs/diamond.svg" className="blue" alt="Diamond" />
              </div>
            ) : null}

            <div className="title-body">
              <Title className={subtitle === null ? "mb-0" : "mb-2"}>
                {title}
              </Title>
              {/* {subtitle === null ? <Text className="text-purple text-lg font-medium">{subtitle}</Text> : null} */}
              <Text className="text-purple text-lg font-medium">
                {subtitle}
              </Text>
            </div>
          </div>

          <Link
            href="/documentation#components"
            className="flex items-center gap-2"
          >
            <Icon.ChevronLeft /> Back to Documentation
          </Link>
        </div>
      </div>

      <Divider className="m-0" />
    </div>
  );
}

export default CustomHeader;
