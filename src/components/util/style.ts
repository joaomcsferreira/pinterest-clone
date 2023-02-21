import styled, { keyframes } from "styled-components"

interface FillContainerProps {
  color: string
  fullScreen?: boolean
}

interface DragAreaProps {
  src?: string
}

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const FillContainer = styled.div<FillContainerProps>`
  position: absolute;
  width: 100%;
  height: ${({ fullScreen }) => (fullScreen ? "100vh" : "100%")};
  top: 0;
  left: 0;
  background-color: ${({ color }) => color};
  z-index: 5;
`

const ErrorContainer = styled.p`
  font-size: 0.75rem;
  color: var(--color-red);
  margin-left: 1rem;
`

const LoadingContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const LoadingIcon = styled.img`
  animation: ${rotate} 1s linear infinite;
`

const DragzoneContainer = styled.div`
  width: 21.25rem;
  height: 30.875rem;
  background-color: var(--color-gray-third);
  border-radius: 5px;
`

const DragArea = styled.div<DragAreaProps>`
  margin: 1rem;
  height: 28.875rem;
  border: 1px dashed var(--color-gray-second);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;
  background: url(${({ src }) => src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 4;
`

const DragAreaInput = styled.input`
  display: none;
`

const DragAreaLogo = styled.img`
  width: 2.5rem;
`

const DragAreaMessage = styled.p`
  font-size: 1.3rem;
`

const DragAreaAlert = styled.p`
  position: absolute;
  bottom: 1rem;
  font-size: 0.9rem;
`

export {
  FillContainer,
  ErrorContainer,
  LoadingContainer,
  LoadingIcon,
  DragzoneContainer,
  DragArea,
  DragAreaInput,
  DragAreaLogo,
  DragAreaMessage,
  DragAreaAlert,
}
