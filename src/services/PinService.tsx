import React from "react"

import { AxiosError } from "axios"
import { ErrorProps } from "../components/helper/Error"

import { User } from "../UserContext"
import { Comment } from "./CommentService"
import { Board } from "./BoardService"
import useServices, { WithFieldValue } from "./useServices"

export interface Pin {
  _id: string
  title: string
  board: Board
  description: string
  website: string
  src: string
  user: User
  comments: Comment[]
}

export type getTypesProps = "all" | "user" | "board"

interface getPinsProps {
  type: getTypesProps
  user?: string
  board?: string
  total?: number
}

const PinService = () => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [pins, setPins] = React.useState<Pin[] | null>(null)
  const [pin, setPin] = React.useState<Pin | null>(null)

  const { addDoc, getDocs, updateDoc, deleteDoc } = useServices()

  const createPin = async (form: WithFieldValue<string>) => {
    try {
      setError("")
      setLoading(true)

      return await addDoc("pin", form)
    } catch (error) {
      const err = (error as AxiosError).response?.data as ErrorProps

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  const getPins = async ({ type, user, board, total }: getPinsProps) => {
    try {
      setError("")
      setLoading(true)

      let config = `/pins`

      switch (type) {
        case "all":
          config += `?type=all`
          break
        case "board":
          config += `?type=board&board=${board}&user=${user}`
          break
        case "user":
          config += `?type=user&user=${user}`
          break
      }

      const pins: Pin[] = await getDocs(config)

      setPins(pins)
    } catch (error) {
      const err = (error as AxiosError).response?.data as ErrorProps

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  const getPin = async (id: string) => {
    let response: Pin | null = null
    try {
      setError("")
      setLoading(true)

      const config = `/pin/${id}`

      const pin: Pin = await getDocs(config)

      setPin(pin)

      return pin
    } catch (error) {
      const err = (error as AxiosError).response?.data as ErrorProps

      setError(err.error)
    } finally {
      setLoading(false)
    }

    return response
  }

  const updatePinData = async (form: WithFieldValue<any>) => {
    let response: Pin | null = null

    try {
      setError("")
      setLoading(true)

      response = await updateDoc(`pin/${form.id}`, form)
    } catch (error) {
      const err = (error as AxiosError).response?.data as ErrorProps

      setError(err.error)
    } finally {
      setLoading(false)
    }

    return response
  }

  const deletePin = async (id: string) => {
    try {
      setError("")
      setLoading(true)

      await deleteDoc("pin", id)
    } catch (error) {
      const err = (error as AxiosError).response?.data as ErrorProps

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  return {
    pin,
    pins,
    error,
    loading,
    createPin,
    getPins,
    getPin,
    setError,
    updatePinData,
    deletePin,
  }
}

export default PinService
