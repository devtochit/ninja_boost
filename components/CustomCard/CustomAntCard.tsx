import React from "react"
import { Card, Typography } from "antd"
import {CustomAntCardProps} from '@/types/Card';


const CustomAntCard: React.FC<CustomAntCardProps> = ({title = "Title", extra = true,content = null,extraHTML = null,}) => {
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

export default CustomAntCard
