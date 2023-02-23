import React from "react"
import { AxiosError } from "axios"

import useServices from "./useServices"

import { ErrorProps } from "../components/util/Error"

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

  const {
    token,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    hasToken,
    getUser,
    signOut,
  } = useServices()

  const login = async (email: string, password: string) => {
    try {
      setError("")
      setLoading(true)

      await signInWithEmailAndPassword(email, password)
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

      const response = await createUserWithEmailAndPassword(email, password)

      if (response) login(email, password)
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
    } finally {
      setLoading(false)
    }
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

      const user = await getUser()

      setUser(user)
      setLogged(true)
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
      setLogged(false)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if (hasToken()) autoLogin()
  }, [token])

  return (
    <UserContext.Provider
      value={{ user, logged, error, loading, login, logOut, signUp, reUpUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => React.useContext(UserContext)
