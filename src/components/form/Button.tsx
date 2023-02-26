import React from "react"
import { ButtonContainer } from "./style"

interface ButtonProps {
  color: string
  active?: boolean
  radius?: number
  full?: boolean
  textDark?: boolean
  padding?: string
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({
  color,
  active,
  radius,
  full,
  textDark,
  padding,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonContainer
      active={active}
      radius={radius}
      full={full}
      textDark={textDark}
      color={color}
      padding={padding}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
