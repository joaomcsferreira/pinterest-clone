import React from "react"

import load from "../../assets/svg/load.svg"
import { LoadingContainer, LoadingIcon } from "./style"

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingIcon src={load} />
    </LoadingContainer>
  )
}

export default Loading
