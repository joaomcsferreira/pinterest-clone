import React from "react"

const useCredentialStorage = () => {
  const [token, setToken] = React.useState(localStorage.getItem("token"))

  const updateToken = (token: string) => {
    setToken(token)

    localStorage.setItem("token", token)
  }

  const getToken = () => {
    return localStorage.getItem("token")
  }

  const deleteToken = () => {
    localStorage.removeItem("token")
  }

  return {
    token,
    updateToken,
    getToken,
    deleteToken,
  }
}

export default useCredentialStorage
