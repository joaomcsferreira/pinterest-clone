import styled from "styled-components"

const CommentBuilderContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  background-color: var(--color-white);
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 2.5rem;
`

const ButtonSend = styled.div`
  position: absolute;
  right: 3rem;
  background-color: var(--color-red-button);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-red-button-second);
  }
`

const ButtonIcon = styled.img``

const CommentsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 50vh;
  padding-bottom: 3rem;
  overflow: scroll;
`

const CommentTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
`

const CommentContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const CommentUsername = styled.h2`
  font-size: 1rem;
  font-weight: 700;
`

const CommentText = styled.p``

export {
  CommentBuilderContainer,
  ButtonSend,
  ButtonIcon,
  CommentsViewContainer,
  CommentContainer,
  CommentTitle,
  CommentUsername,
  CommentText,
}