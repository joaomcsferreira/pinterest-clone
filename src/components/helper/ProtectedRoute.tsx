import React from "react"
import { Navigate, Outlet } from "react-router-dom"

import useCredentialStorage from "../../services/useCredentialStorage"
import { useUserContext } from "../../UserContext"

const ProtectedRoute = () => {
  const { getToken } = useCredentialStorage()
  const { reUpUser } = useUserContext()

  React.useEffect(() => {
    reUpUser()
  }, [])

  return getToken() ? <Outlet /> : <Navigate to={"/"} />
}

export default ProtectedRoute
