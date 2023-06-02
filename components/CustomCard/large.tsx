import React from "react"
import { Card, Typography } from "antd"

interface LargeCardProps {
  title?: React.ReactNode | String
  extra?: Boolean
  content?: React.ReactNode
  extraHTML?: React.ReactNode | null
}

const LargeCard: React.FC<LargeCardProps> = ({
  title = "Title",
  extra = true,
  content = null,
  extraHTML = null,
}) => {
  return (
    <Card
      title={title}
      className="card h-full"
      extra={extra ? extraHTML : null}
    >
      {content}
    </Card>
  )
}

export default LargeCard
