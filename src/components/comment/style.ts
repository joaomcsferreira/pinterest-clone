import styled from "styled-components"

const CommentBuilderContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  background-color: var(--g-color-white);
  z-index: 5;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 2.5rem;
  position: relative;
`

const ErrorContainer = styled.div`
  position: absolute;
  top: -0.8rem;

  & > :nth-child(n) {
    font-size: 0.9rem;
  }
`

const ButtonSend = styled.div`
  position: absolute;
  right: 3rem;
  background-color: var(--color-button-red);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-button-red50);
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

const CommentContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export {
  CommentBuilderContainer,
  ButtonSend,
  ButtonIcon,
  CommentsViewContainer,
  CommentContainer,
  ErrorContainer,
}
