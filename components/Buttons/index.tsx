import React from "react";
import { Button, Divider } from "antd";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  buttonText?: string;
  showIcon?: boolean;
  size?: any;
  className?: string;
  icon?: React.ReactNode;
}

export const CustomPrimaryButton: React.FC<ButtonProps> = ({
  buttonText = "Primary Button",
  showIcon = true,
  size = "large",
  className = "",
  icon = null,
}) => {
  return (
    <Button
      size={size}
      className={`custom-primary-button flex items-center justify-start gap-2 ${className}`}
      icon={icon}
    >
      <span>{buttonText}</span>
      {showIcon && <ArrowUpRight size={16} />}
    </Button>
  );
}

export const CustomSecondaryButton: React.FC<ButtonProps> = ({
  buttonText = "Secondary Button",
  showIcon = true,
  size = "large",
  className = "",
  icon = null,
}) => {
  return (
    <Button
      size={size}
      className={`custom-secondary-button flex items-center justify-start gap-2 ${className}`}
      icon={icon}
    >
      <span>{buttonText}</span>
      {showIcon && <ArrowUpRight size={16} />}
    </Button>
  );
}

export const CustomTertiaryButton: React.FC<ButtonProps> = ({
  buttonText = "Tertiary Button",
  size = "large",
  className = "",
  showIcon = false,
  icon = null,
}) => {
  return (
    <Button
      size={size}
      className={`custom-tertiary-button flex items-center justify-start gap-2 ${className}`}
    >
      <span>{buttonText}</span>
      {showIcon && icon}
    </Button>
  );
}

export const CustomIconOnlyButton: React.FC<ButtonProps> = ({
  size = "large",
  className = "",
  icon = <ArrowUpRight size={18} />,
}) => {
  return (
    <Button
      size={size}
      className={`custom-icon-only-button flex items-center justify-center gap-2 ${className}`}
      icon={icon}
    />
  );
}

export const CustomGithubButton: React.FC<ButtonProps> = ({
  buttonText = "15,000",
  size = "large",
  className = "",
}) => {
  return (
    <Button
      size={size}
      className={`custom-github-button flex items-center justify-center gap-2 ${className}`}
    >
      <span>{buttonText}</span>
      <img src="/Logo/star.svg" alt="Star" width="18" />
      <Divider type="vertical" />
      <img src="/Logo/githublink.svg" alt="Star" width="30" />
    </Button>
  );
}

export const CustomLinkButton: React.FC<ButtonProps> = ({
  buttonText = "Link Button",
  showIcon = true,
  size = "large",
  className = "",
  icon = null,
}) => {
  return (
    <Button
      type="text"
      size={size}
      className={`custom-link-button flex items-center justify-start gap-2 ${className}`}
      icon={icon}
    >
      <span>{buttonText}</span>
      {showIcon && <ArrowUpRight size={16} />}
    </Button>
  );
}

export const CustomTextLinkButton: React.FC<ButtonProps> = ({
  buttonText = "Text Link Button",
  showIcon = true,
  size = "large",
  className = "",
  icon = null,
}) => {
  return (
    <Button
      type="link"
      size={size}
      className={`custom-text-link-button flex items-center justify-start gap-2 ${className}`}
      icon={icon}
    >
      <span>{buttonText}</span>
      {showIcon && <ArrowUpRight size={16} />}
    </Button>
  );
}
