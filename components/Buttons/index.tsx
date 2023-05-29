import React from "react"
import { Button, Divider } from "antd"
import { ArrowUpRight } from "lucide-react"

interface ButtonProps {
  text?: string
  iconstat?: boolean
  size?: any
  className?: string
  icon?: React.ReactNode
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  text = "Button text",
  iconstat = true,
  size = "large",
  className = "",
  icon = null,
}) => {
  return (
    <Button
      size={size}
      className={`custom-btn-primary flex items-center justify-start gap-2 ${className}`}
      icon={icon}
    >
      <span>{text}</span>
      {iconstat ? <ArrowUpRight size={16} /> : null}
    </Button>
  )
}

export const SecondaryButton: React.FC<ButtonProps> = ({
  text = "Button text",
  iconstat = true,
  size = "large",
  className = "",
  icon = null,
}) => {
  return (
    <Button
      size={size}
      className={`custom-btn-secondary flex items-center justify-start gap-2 ${className}`}
      icon={icon}
    >
      <span>{text}</span>
      {iconstat ? <ArrowUpRight size={16} /> : null}
    </Button>
  )
}

export const TertiaryButton: React.FC<ButtonProps> = ({
  text = "Button text",
  size = "large",
  className = "",
  iconstat = false,
  icon = null,
}) => {
  return (
    <Button
      size={size}
      className={`custom-btn-tertiary flex items-center justify-start gap-2 ${className}`}
    >
      <span>{text}</span>
      {iconstat ? icon : null}
    </Button>
  )
}

export const IconOnlyButton: React.FC<ButtonProps> = ({
  size = "large",
  className = "",
  icon = <ArrowUpRight size={18} />,
}) => {
  return (
    <Button
      size={size}
      className={`custom-btn-primary flex items-center justify-center gap-2 ${className}`}
      icon={icon}
    />
  )
}

export const GithubButton: React.FC<ButtonProps> = ({
  text = "15,000",
  size = "large",
  className = "",
}) => {
  return (
    <Button
      size={size}
      className={`custom-btn-secondary flex items-center justify-center gap-2 ${className}`}
    >
      <span>{text}</span>
      <img src="/Logo/star.svg" alt="Star" width="18" />
      <Divider type="vertical" />
      <img src="/Logo/githublink.svg" alt="Star" width="30" />
    </Button>
  )
}

export const LinkButton: React.FC<ButtonProps> = ({
  text = "Button text",
  iconstat = true,
  size = "large",
  className = "",
  icon = null,
}) => {
  return (
    <Button
      type="text"
      size={size}
      className={`flex items-center justify-start gap-2 ${className}`}
      icon={icon}
    >
      <span>{text}</span>
      {iconstat ? <ArrowUpRight size={16} /> : null}
    </Button>
  )
}

export const TextLinkButton: React.FC<ButtonProps> = ({
  text = "Button text",
  iconstat = true,
  size = "large",
  className = "",
  icon = null,
}) => {
  return (
    <Button
      type="link"
      size={size}
      className={`flex items-center justify-start gap-2 ${className}`}
      icon={icon}
    >
      <span>{text}</span>
      {iconstat ? <ArrowUpRight size={16} /> : null}
    </Button>
  )
}
