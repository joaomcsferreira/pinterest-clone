import React from "react"

const validationRules = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message:
      "The email address you entered is not in the correct format. Please try again.",
  },
}

const useForm = (type?: string) => {
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState("")

  const validate = (value: string) => {
    if (value.length === 0) {
      setError("blank-field")

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

  return {
    onChange,
    onBlur: () => validate(value),
    value,
    error,
    clearValue,
    validate: () => validate(value),
  }
}

export default useForm
