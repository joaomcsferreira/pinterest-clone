import React from "react"

import Input from "../form/Input"
import useForm from "../../hooks/useForm"

import { useUserContext } from "../../UserContext"

import { Avatar } from "../header/style"
import {
  ButtonIcon,
  ButtonSend,
  CommentBuilderContainer,
  ErrorContainer,
} from "./style"

import send from "../../assets/svg/send.svg"
import CommentService from "../../services/CommentService"
import { useParams } from "react-router-dom"
import Error from "../util/Error"

const CommentBuilder = () => {
  const comment = useForm()
  const { user } = useUserContext()

  const { id } = useParams()

  const { createComment, error } = CommentService()

  function handleSubmit() {
    if (id) createComment(comment.value, id)

    comment.clearValue()
  }

  return (
    <>
      {user && (
        <CommentBuilderContainer>
          <ErrorContainer>{error && <Error error={error} />}</ErrorContainer>
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
