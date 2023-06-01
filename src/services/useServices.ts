import axios from "axios"
import useCredentialStorage from "./useCredentialStorage"

const api = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}` })

export type WithFieldValue<T> = {
  [key: string]: T
}

const useServices = () => {
  const { getToken } = useCredentialStorage()

  const getUser = async (token: string | null) => {
    if (token) {
      const userToken = await api.get("/validate", {
        headers: { Authorization: token },
      })

      return userToken.data
    }
  }

  const getUserData = async (username: string) => {
    const response = await api.get(`/user/${username}`)

    return response.data
  }

  const addDoc = async (
    collection: string,
    data: WithFieldValue<any> | FormData
  ) => {
    const response = await api.post(`/${collection}`, data, {
      headers: {
        "Content-Type":
          data instanceof FormData ? "multipart/form-data" : "application/json",
        Authorization: getToken(),
      },
    })

    return response.data
  }

  const getDocs = async (config: string) => {
    const response = await api.get(config)

    return response.data
  }

  const updateDoc = async (
    collection: string,
    data: WithFieldValue<any> | FormData
  ) => {
    const response = await api.put(`/${collection}`, data, {
      headers: {
        "Content-Type":
          data instanceof FormData ? "multipart/form-data" : "application/json",
        Authorization: getToken(),
      },
    })

    return response.data
  }

  const deleteDoc = async (collection: string, id: string) => {
    await api.delete(`/${collection}/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    })
  }

  return {
    getUser,
    getUserData,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
  }
}

export default useServices
