import React from "react"
import { AxiosError } from "axios"

import useServices from "./services/useServices"

import { ErrorProps } from "./components/helper/Error"
import useCredentialStorage from "./services/useCredentialStorage"
import { useNavigate } from "react-router-dom"

export interface User {
  _id: string
  email: string
  username: string
  firstName?: string
  lastName?: string
  avatar?: string
  followers: Array<User>
  following: Array<User>
}

interface UserContextValue {
  login: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  updateUserData: (form: FormData) => Promise<User | null>
  updateFollowing: (username: string) => void
  updateUnfollowing: (username: string) => void
  logOut: () => void
  getProfile: (username: string) => Promise<User | null>
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

  const { getUser, getUserData, addDoc, updateDoc } = useServices()

  const { token, updateToken, getToken, deleteToken } = useCredentialStorage()

  const navigate = useNavigate()

  const login = async (email: string, password: string) => {
    try {
      setError("")
      setLoading(true)

      const response: { token: string } = await addDoc("user/token", {
        email,
        password,
      })

      updateToken(response.token)
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
      setUser(response)
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
    } finally {
      setLoading(false)
    }
    return response
  }

  const updateFollowing = async (username: string) => {
    try {
      setError("")
      setLoading(true)

      const response = await updateDoc("follow", {
        usernameToFollow: username,
      })

      setUser(response)
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
    } finally {
      setLoading(false)
    }
  }

  const updateUnfollowing = async (username: string) => {
    try {
      setError("")
      setLoading(true)

      const response = await updateDoc("unfollow", {
        usernameToUnfollow: username,
      })

      setUser(response)
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
    } finally {
      setLoading(false)
    }
  }

  const getProfile = async (username: string) => {
    let response: User | null = null

    try {
      setError("")
      setLoading(true)

      response = await getUserData(username)
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
    } finally {
      setLoading(false)
    }
    return response
  }

  const logOut = () => {
    deleteToken()

    setUser(null)
    setError("")
    setLoading(false)
    setLogged(false)

    navigate("/")
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
      logOut()
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
        updateUserData,
        updateFollowing,
        updateUnfollowing,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => React.useContext(UserContext)
