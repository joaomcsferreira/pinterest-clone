import React from "react"
import { FillContainer } from "./style"

interface FillModeProps {
  color?: string
  setModal?: (value: string) => void
  full?: boolean
  children?: React.ReactNode
}

const FillMode = ({ color, setModal, full, children }: FillModeProps) => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <FillContainer
      onClick={() => setModal && setModal("")}
      color={color ? `var(${color})` : "rgba(0, 0, 0, 0)"}
      position={full ? "fixed" : "absolute"}
    >
      {children && children}
    </FillContainer>
  )
}

export default FillMode
