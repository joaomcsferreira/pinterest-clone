import React from "react"
import { User } from "./UserContext"
import useServices from "./useServices"

export interface Comment {
  _id: string
  text: string
  user: User
}

const CommentService = () => {
  const [comments, setComments] = React.useState<Comment[] | null>(null)

  const { addDoc, getDocs } = useServices()

  const createComment = async (text: string, id: string) => {
    await addDoc("comment", { text, pinId: id })
  }

  const getComments = async (pinId: string) => {
    const config = `/pin/${pinId}/comments`

    const response = await getDocs(config)

    setComments(response)
  }

  return { comments, createComment, getComments }
}

export default CommentService
