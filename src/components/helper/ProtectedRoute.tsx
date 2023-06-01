import React from "react"
import { Navigate, Outlet } from "react-router-dom"

import useCredentialStorage from "../../services/useCredentialStorage"

const ProtectedRoute = () => {
  const { token } = useCredentialStorage()

  return token ? <Outlet /> : <Navigate to={"/"} />
}

export default ProtectedRoute
