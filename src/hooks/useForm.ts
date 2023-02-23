import React from "react"

const validationRules = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message:
      "The email address you entered is not in the correct format. Please try again.",
  },
}

export interface useFormProps {
  value: string
  error: string
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  clearValue: () => void
  setInitialValue: (value: string | undefined) => void
  onBlur: () => boolean
  validate: () => boolean
}

const useForm = (type?: string): useFormProps => {
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState("")

  const validate = (value: string) => {
    if (value.length === 0) {
      setError("The field cannot be blank")

      return false
    } else if (
      validationRules.email &&
      !validationRules.email.regex.test(value) &&
      type
    ) {
      setError(validationRules.email.message)

      return false
    } else {
      setError("")
      return true
    }
  }

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError("")

    setValue(target.value)
  }

  const clearValue = () => {
    setValue("")
  }

  const setInitialValue = (value: string | undefined) => {
    if (value) setValue(value)
  }

  return {
    value,
    error,
    onChange,
    clearValue,
    setInitialValue,
    onBlur: () => validate(value),
    validate: () => validate(value),
  }
}

export default useForm
