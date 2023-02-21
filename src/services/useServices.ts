import axios from "axios"
import useCredentialStorage from "./useCredentialStorage"

const api = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}` })

export type WithFieldValue<T> = {
  [key: string]: T
}

const useServices = () => {
  const { token, updateToken } = useCredentialStorage()

  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    const response = await api.post("/user/token", { email, password })

    updateToken(response.data.token)
  }

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    const response = await api.post("/user", { email, password })

    return response
  }

  const getUser = async () => {
    if (token) {
      const userToken = await api.get("/validate", {
        headers: { Authorization: token },
      })

      if (userToken) return userToken.data.user
      updateToken("")
    }
  }

  const getProfile = async (username: string) => {
    const response = await api.get(`/user/${username}`)

    return response.data.user
  }

  const hasToken = () => {
    return token ? true : false
  }

  const signOut = () => {
    updateToken("")
  }

  const addDoc = async (
    collection: string,
    data: WithFieldValue<any> | FormData,
    formdata?: string
  ) => {
    const response = await api.post(`/${collection}`, data, {
      headers: {
        "Content-Type": `${
          formdata ? "multipart/form-data" : "Application/json"
        }`,
        Authorization: token,
      },
    })

    return response.data.result
  }

  const getDocs = async (config: string) => {
    const response = await api.get(config)

    return response.data.result
  }

  return {
    token,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getUser,
    getProfile,
    hasToken,
    signOut,
    addDoc,
    getDocs,
  }
}

export default useServices
