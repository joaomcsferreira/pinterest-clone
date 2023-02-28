import React from "react"
import { ErrorContainer } from "./style"

export interface ErrorProps {
  error: string
}

const Error = ({ error }: ErrorProps) => {
  return <ErrorContainer>{error}</ErrorContainer>
}

export default Error
