import React from "react"

const useCredentialStorage = () => {
  const [token, setToken] = React.useState(localStorage.getItem("token"))

  const updateToken = (token: string) => {
    setToken(token)

    localStorage.setItem("token", token)
  }

  return {
    token,
    updateToken,
  }
}

export default useCredentialStorage
