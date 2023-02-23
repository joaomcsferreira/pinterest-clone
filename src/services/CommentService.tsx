import React from "react"

import { AxiosError } from "axios"
import { ErrorProps } from "../components/util/Error"

import { User } from "../UserContext"
import useServices from "./useServices"

export interface Comment {
  _id: string
  text: string
  user: User
}

const CommentService = () => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [comments, setComments] = React.useState<Comment[] | null>(null)

  const { addDoc, getDocs } = useServices()

  const createComment = async (text: string, id: string) => {
    try {
      setError("")
      setLoading(true)

      await addDoc("comment", { text, pinId: id })
    } catch (error) {
      const err = (error as AxiosError).response?.data as ErrorProps

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  const getComments = async (pinId: string) => {
    try {
      setError("")
      setLoading(true)

      const config = `/pin/${pinId}/comments`

      const response = await getDocs(config)

      setComments(response)
    } catch (error) {
      const err = (error as AxiosError).response?.data as ErrorProps

      setError(err.error)
    } finally {
      setLoading(false)
    }
  }

  return { comments, error, loading, createComment, getComments }
}

export default CommentService
