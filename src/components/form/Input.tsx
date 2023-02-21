import React from "react"
import Error from "../util/Error"
import { InputContainer } from "./style"

interface InputProps {
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: () => boolean
  blank?: boolean
  type: string
  color?: boolean
  value: string
  error: string
  placeholder: string
  radius: number
}

const Input = ({
  onChange,
  onBlur,
  blank,
  type,
  color,
  value,
  error,
  placeholder,
  radius,
}: InputProps) => {
  return (
    <>
      <InputContainer
        style={{ backgroundColor: color ? "var(--color-gray-search)" : "none" }}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        value={value}
        placeholder={placeholder}
        color={color ? "var(--color-gray-search)" : "var(--color-gray-second)"}
        radius={radius}
      />
      {!blank && <Error error={error} />}
    </>
  )
}

export default Input
