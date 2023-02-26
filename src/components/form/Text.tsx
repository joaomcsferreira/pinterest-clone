import React from "react"
import { TextContainer } from "./style"

interface TextProps {
  size?: number
  weight?: number
  color?: string
  capitalize?: boolean
  padding?: string
  children: React.ReactNode
  justify?: string
}

const Text = ({
  size,
  weight,
  color,
  capitalize,
  padding,
  justify,
  children,
}: TextProps) => {
  return (
    <TextContainer
      size={size}
      weight={weight}
      color={color}
      capitalize={capitalize}
      padding={padding}
      justify={justify}
    >
      {children}
    </TextContainer>
  )
}

export default Text
