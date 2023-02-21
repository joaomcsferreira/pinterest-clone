import React from "react"
import { Avatar } from "../header/style"
import { Comment } from "../../services/CommentService"
import {
  CommentContainer,
  CommentsViewContainer,
  CommentText,
  CommentTitle,
  CommentUsername,
} from "./style"

interface CommentViewerProps {
  comments: Comment[]
}

const CommentViewer = ({ comments }: CommentViewerProps) => {
  return (
    <>
      {comments && (
        <CommentsViewContainer>
          <CommentTitle>{`${comments.length} Comments`}</CommentTitle>
          {comments.map((comment) => (
            <CommentContainer key={comment._id}>
              <Avatar
                size="2"
                src={
                  comment.user.avatar
                    ? `${process.env.REACT_APP_BASE_URL}${comment.user.avatar}`
                    : ""
                }
              >
                <p>
                  {comment.user.avatar ? "" : comment.user.username?.charAt(0)}
                </p>
              </Avatar>
              <CommentUsername>{comment.user.username}</CommentUsername>
              <CommentText>{comment.text}</CommentText>
            </CommentContainer>
          ))}
        </CommentsViewContainer>
      )}
    </>
  )
}

export default CommentViewer
