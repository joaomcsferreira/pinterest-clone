import React from "react"
import { AxiosError } from "axios"

import useServices from "./services/useServices"

import { ErrorProps } from "./components/util/Error"
import useCredentialStorage from "./services/useCredentialStorage"

export interface User {
  _id: string
  email: string
  username: string
  firstName?: string
  lastName?: string
  avatar?: string
}

interface UserContextValue {
  login: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  updateUserData: (form: FormData) => Promise<User | null>
  logOut: () => void
  reUpUser: () => void
  user: User | null
  logged: boolean
  error: string
  loading: boolean
}

const UserContext = React.createContext({} as UserContextValue)

export const UserProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [user, setUser] = React.useState<User | null>(null)
  const [logged, setLogged] = React.useState(false)
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const { getUser, signOut, addDoc, updateDoc } = useServices()

  const { token, updateToken, getToken } = useCredentialStorage()

  const login = async (email: string, password: string) => {
    try {
      setError("")
      setLoading(true)

      const response = await addDoc("user/token", { email, password })
      updateToken(response)
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      setError("")
      setLoading(true)

      const response = await addDoc("user", { email, password })

      if (response) login(email, password)
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
    } finally {
      setLoading(false)
    }
  }

  const updateUserData = async (form: FormData) => {
    let response: User | null = null

    try {
      setError("")
      setLoading(true)

      response = await updateDoc("user", form)
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
    } finally {
      setLoading(false)
    }
    return response
  }

  const logOut = () => {
    try {
      signOut()

      setUser(null)
      setLogged(false)
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
    }
  }

  const reUpUser = async () => {
    await autoLogin()
  }

  const autoLogin = async () => {
    try {
      setError("")
      setLoading(true)

      const user = await getUser(token)

      setUser(user)
      setLogged(true)
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
      setLogged(false)
      updateToken("")
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if (getToken()) autoLogin()
  }, [token])

  return (
    <UserContext.Provider
      value={{
        user,
        logged,
        error,
        loading,
        login,
        logOut,
        signUp,
        reUpUser,
        updateUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => React.useContext(UserContext)