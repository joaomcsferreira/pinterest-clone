import React from "react"

import useServices from "./useServices"

import { User } from "./UserContext"
import { Comment } from "./CommentService"

interface Pin {
  _id: string
  title: string
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

  const { addDoc, getDocs } = useServices()

  const createPin = async (form: FormData) => {
    try {
      setError("")
      setLoading(true)

      await addDoc("pin", form)
    } catch (error) {
      const err = (error as Error).message
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const getPins = async ({ type, user, board, total }: getPinsProps) => {
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
  }

  const getPin = async (id: string) => {
    const config = `/pin/${id}`

    const pin: Pin = await getDocs(config)

    setPin(pin)
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
  }
}

export default PinService
