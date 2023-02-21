import React from "react"

import Input from "../form/Input"
import useForm from "../../hooks/useForm"

import { useUserContext } from "../../services/UserContext"

import { Avatar } from "../header/style"
import { ButtonIcon, ButtonSend, CommentBuilderContainer } from "./style"

import send from "../../assets/svg/send.svg"
import CommentService from "../../services/CommentService"
import { useParams } from "react-router-dom"

const CommentBuilder = () => {
  const comment = useForm()
  const { user } = useUserContext()

  const { id } = useParams()

  const { createComment } = CommentService()

  function handleSubmit() {
    if (id && comment.value) createComment(comment.value, id)

    comment.clearValue()
  }

  return (
    <>
      {user && (
        <CommentBuilderContainer>
          <Avatar
            size="3"
            src={
              user.avatar
                ? `${process.env.REACT_APP_BASE_URL}${user.avatar}`
                : ""
            }
          >
            <p>{user.avatar ? "" : user.username?.charAt(0)}</p>
          </Avatar>
          <Input
            radius={1.7}
            blank
            type="text"
            placeholder="Add a comment"
            {...comment}
          />
          <ButtonSend onClick={handleSubmit}>
            <ButtonIcon src={send} />
          </ButtonSend>
        </CommentBuilderContainer>
      )}
    </>
  )
}

export default CommentBuilder
