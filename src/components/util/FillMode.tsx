import React from "react"
import { FillContainer } from "./style"

interface FillModeProps {
  color?: string
  setModal: (value: string) => void
  children?: React.ReactNode
  fullScreen?: boolean
}

const FillMode = ({ color, setModal, children }: FillModeProps) => {
  return (
    <FillContainer
      onClick={() => setModal("")}
      color={color ? color : "rgba(0, 0, 0, 0)"}
      fullScreen
    >
      {children && children}
    </FillContainer>
  )
}

export default FillMode
