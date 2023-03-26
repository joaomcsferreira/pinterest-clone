import styled, { keyframes } from "styled-components"

interface FillContainerProps {
  color: string
  position: string
}

interface DragAreaProps {
  src?: string
  pinBlank: boolean
  isOver?: boolean
}

interface DragzoneContainerProps {
  pinBlank: boolean
}

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const FillContainer = styled.div<FillContainerProps>`
  position: ${({ position }) => position};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ color }) => color};
  z-index: 5;
`

const ErrorContainer = styled.p`
  font-size: 0.75rem;
  color: var(--g-color-red);
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

const DragzoneContainer = styled.div<DragzoneContainerProps>`
  width: 21.25rem;
  height: 30.875rem;
  background-color: ${({ pinBlank }) =>
    pinBlank ? "var(--g-color-lightCoral)" : "var(--g-colorGray25)"};
  border-radius: 5px;
`

const DragArea = styled.div<DragAreaProps>`
  margin: 1rem;
  height: 28.875rem;
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
  background: url(${({ src }) => src})
    ${({ isOver }) => isOver && `var(--g-color-lightCyan)`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 4;
  border: 1px dashed
    ${({ pinBlank }) =>
      pinBlank ? "var(--g-color-danger)" : "var(--g-colorGray150)"};
  color: ${({ pinBlank }) =>
    pinBlank ? "var(--g-color-danger)" : "var(--g-color-black)"};
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
const MansoryContainer = styled.div`
  width: 95vw;
  height: auto;
  margin: 2rem auto;
  display: flex;
`

const ButtonBackContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  background-color: var(--g-color-red);
  position: fixed;
  top: 1.2rem;
  left: 1.2rem;
  z-index: 4;
  border-radius: 50%;

  @media (min-width: 768px) {
    display: none;
  }
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
  MansoryContainer,
  ButtonBackContainer,
}
