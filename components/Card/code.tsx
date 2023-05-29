import React from "react"
import { Card, Typography } from "antd"

interface CardProps {
  title?: React.ReactNode | String
  extra?: Boolean
  content?: React.ReactNode
  extraHTML?: React.ReactNode | null
}

export const CodeCard: React.FC<CardProps> = ({
  title = null,
  extra = true,
  content = null,
  extraHTML = null,
}) => {
  return (
    <Card
      title={
        title ? <span className="text-gray-50 font-medium">{title}</span> : null
      }
      className="card code-card"
      extra={extra ? <img src="./imgs/code.svg" alt="code" /> : null}
    >
      {content}
    </Card>
  )
}

export const TerminalCard: React.FC<CardProps> = ({
  title = "Title",
  extra = true,
  content = null,
  extraHTML = null,
}) => {
  return (
    <Card
      className="card code-card"
      extra={<img src="./imgs/terminal.svg" alt="terminal" />}
    >
      {content}
    </Card>
  )
}
