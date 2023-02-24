import React from "react"
import { FillContainer } from "./style"

interface FillModeProps {
  color?: string
  setModal?: (value: string) => void
  full?: boolean
  children?: React.ReactNode
}

const FillMode = ({ color, setModal, full, children }: FillModeProps) => {
  return (
    <FillContainer
      onClick={() => setModal && setModal("")}
      color={color ? color : "rgba(0, 0, 0, 0)"}
      position={full ? "fixed" : "absolute"}
    >
      {children && children}
    </FillContainer>
  )
}

export default FillMode
