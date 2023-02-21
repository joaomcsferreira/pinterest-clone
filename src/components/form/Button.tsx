import React from "react"
import { ButtonContainer } from "./style"

interface ButtonProps {
  color?: string
  invisible?: boolean
  active?: boolean
  radius?: number
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({
  color,
  invisible,
  active,
  radius,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonContainer
      invisible={invisible}
      active={active}
      radius={radius}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
