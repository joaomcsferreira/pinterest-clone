import React from "react"
import { Avatar } from "../header/style"
import { Comment } from "../../services/CommentService"
import { CommentContainer, CommentsViewContainer } from "./style"
import Title from "../form/Title"
import Text from "../form/Text"

interface CommentViewerProps {
  comments: Comment[]
}

const CommentViewer = ({ comments }: CommentViewerProps) => {
  return (
    <>
      {comments && (
        <CommentsViewContainer>
          <Title size={1.8} weight={700}>{`${comments.length} Comments`}</Title>
          {comments.map((comment) => (
            <CommentContainer key={comment._id}>
              <Avatar
                size="2"
                src={comment.user.avatar ? `${comment.user.avatar}` : ""}
              >
                <p>
                  {comment.user.avatar ? "" : comment.user.username?.charAt(0)}
                </p>
              </Avatar>
              <Text weight={500} capitalize>
                {comment.user.username}
              </Text>
              <Text>{comment.text}</Text>
            </CommentContainer>
          ))}
        </CommentsViewContainer>
      )}
    </>
  )
}

export default CommentViewer
