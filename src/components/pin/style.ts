import styled from "styled-components"

interface InfoInputProps {
  size: number
  bold?: boolean
  message?: string
}

interface PinInfoProps {
  height?: number
}

interface DisplayImageProps {
  src: string
}

const Container = styled.div`
  background-color: var(--g-colorGray100);
  height: 100%;
  padding: 5vh 0;
`

const Wraper = styled.div`
  background-color: var(--g-color-white);
  max-width: 85vw;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
`

const WraperPinBuilder = styled(Wraper)`
  flex-direction: column;
  margin: 0 auto;

  align-items: center;

  padding: 3rem;

  & > :nth-child(n) {
    margin-top: 10vh;
  }

  & > :nth-child(3) {
    width: 100%;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    width: 70vw;

    & > :nth-child(3) {
      width: 60%;
    }
  }
`

const WraperPinView = styled(Wraper)`
  margin: 5vh auto;

  flex-direction: column;

  box-shadow: 0 0 5px 2px var(--g-colorTransparentGray20);

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const WraperPinEdit = styled(WraperPinView)`
  width: 70vw;
  height: 80vh;
  position: absolute;
  top: calc(50% - 40vh);
  left: calc(50% - 35vw);
  z-index: 11;
  padding: 2rem;

  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-rows: 1fr 5fr 1fr;

  gap: 0.5rem;

  & > :nth-child(1) {
    grid-column: 1 / span 2;
  }

  & > :nth-child(2) {
    grid-column: 1 / span 2;
  }

  & > :nth-child(3) {
    grid-row: 2;
    grid-column: 2;
    /* max-width: 100%; */
    align-self: center;
    border-radius: 0.4rem;
  }

  & > :nth-child(4) {
    grid-column: 1 / span 2;
    grid-row: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 800px) {
    & > :nth-child(2) {
      grid-column: 1;
    }
  }
`

const Actions = styled.div`
  width: 100%;
  position: absolute;
  top: -5vh;
  left: 0;
  display: flex;
  height: 7vh;
  padding: 0 3rem;
  justify-content: end;
`

const ActionsItems = styled.div`
  position: relative;
  display: flex;
`

const ButtonSave = styled.button`
  border: none;
  color: var(--g-color-white);
  background-color: var(--color-button-red);
  font-weight: 1.1rem;
  font-weight: 700;
  margin-left: -1rem;
  padding: 0 1rem;
  border-radius: 0 10px 10px 0;
  z-index: 4;
  height: 3.125rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-button-red50);
  }
`

const ActionOptions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--g-color-white);
`

const ActionOption = styled.p`
  padding: 0.8rem;
  display: flex;
  place-items: center;
  border-radius: 0.7rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: var(--g-colorGray150);
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1.5rem;
  gap: 2rem;
`

const InfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const InfoInput = styled.input<InfoInputProps>`
  border: none;
  border-bottom: 1px solid var(--g-colorGray100);
  font-size: ${({ size }) => `${size}rem`};
  padding: 0.5rem;
  font-weight: ${({ bold }) => (bold ? "700" : "400")};

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--g-color-info);
  }
`

const PinImg = styled.img`
  max-height: 100vh;
  object-fit: cover;

  @media (min-width: 800px) {
    max-width: 60vw;
  }
`

const PinInfo = styled.div<PinInfoProps>`
  width: 100%;
  height: ${({ height }) => height && `${height}px`};
  display: grid;
  grid-template-rows: 1fr 10vh;

  @media (min-width: 800px) {
    height: ${({ height }) => height && `${height}px`};
  }
`

const PinInfoSection = styled.div`
  padding: 2rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: scroll;
`

const PinInfoLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`

const PinAuthor = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  gap: 1rem;
`

const PinAuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ErrorPostion = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: block;
  left: 25%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > :nth-child(n) {
    font-size: 1rem;
    font-weight: bold;
  }
`

const PinEditInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`

const DisplayImage = styled.div<DisplayImageProps>`
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src}) var(--g-colorGray200);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: none;

  @media (min-width: 800px) {
    display: block;
  }
`

const PinEditSection = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 1fr 2fr;
`

const PinDeleteContainer = styled.div`
  width: 30rem;
  height: 15rem;
  background-color: var(--g-color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  gap: 1rem;
  position: absolute;
  top: calc(50% - 7.5rem);
  left: calc(50% - 15rem);
  padding: 1rem;
  z-index: 7;
`

export {
  Container,
  Wraper,
  WraperPinBuilder,
  WraperPinView,
  Actions,
  ActionsItems,
  ActionOptions,
  ActionOption,
  InfoContainer,
  InfoSection,
  InfoInput,
  ButtonSave,
  PinImg,
  PinInfo,
  PinEditInfo,
  DisplayImage,
  PinInfoSection,
  PinInfoLink,
  PinAuthor,
  PinAuthorInfo,
  ErrorPostion,
  WraperPinEdit,
  PinEditSection,
  PinDeleteContainer,
}
