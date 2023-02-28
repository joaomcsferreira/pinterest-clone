import React from "react"

import { AxiosError } from "axios"
import { ErrorProps } from "../components/helper/Error"

import useServices from "./useServices"

export interface Board {
  _id: string
  name: string
}

interface getBoardsProps {
  username: string
}

const BoardService = () => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [boards, setBoards] = React.useState<Board[] | null>(null)

  const { addDoc, getDocs } = useServices()

  const createBoard = async (name: string) => {
    try {
      setLoading(true)

      return await addDoc("board", { name })
    } catch (error) {
      const errorMessage = (error as AxiosError).response?.data as ErrorProps

      setError(errorMessage.error)
    } finally {
      setLoading(false)
    }
  }

  const getBoards = async ({ username }: getBoardsProps) => {
    try {
      setError("")
      setLoading(true)

      const config = `/boards/${username}`

      const boards: Board[] = await getDocs(config)

      setBoards(boards)
    } catch (error) {
      const err = (error as AxiosError).response?.data as ErrorProps

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }
  return { createBoard, getBoards, error, loading, boards }
}

export default BoardService
