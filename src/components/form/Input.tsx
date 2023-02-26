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
  background?: string
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
  background,
  placeholder,
  radius,
}: InputProps) => {
  return (
    <>
      <InputContainer
        onChange={onChange}
        onBlur={onBlur}
        background={background}
        type={type}
        value={value}
        placeholder={placeholder}
        color={color ? "var(--g-colorGray50)" : "var(--g-colorGray150)"}
        radius={radius}
      />
      {!blank && <Error error={error} />}
    </>
  )
}

export default Input
