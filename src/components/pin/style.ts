import styled from "styled-components"

interface InfoInputProps {
  size: number
  bold?: boolean
  message?: string
}

const Container = styled.div`
  background-color: var(--color-gray-fifth);
  height: 100%;
  padding: 5vh 0;
`

const Wraper = styled.div`
  background-color: var(--color-white);
  max-width: 85%;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
`

const WraperPinBuilder = styled(Wraper)`
  margin: 0 auto;
  width: 70vw;

  justify-content: space-around;

  padding: 3rem;

  & > :nth-child(n) {
    margin-top: 10vh;
  }

  & > :nth-child(3) {
    width: 60%;
  }
`

const WraperPinView = styled(Wraper)`
  margin: 5vh auto;

  max-width: 80vw;

  box-shadow: 0 0 5px 2px rgba(130, 130, 130, 0.2);
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
  color: var(--color-white);
  background-color: var(--color-red-button);
  font-weight: 1.1rem;
  font-weight: 700;
  padding: 0 1rem;
  border-radius: 0 10px 10px 0;
  cursor: pointer;

  &:hover {
    background-color: var(--color-red-button-second);
  }
`

const ActionOptions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-white);
`

const ActionOption = styled.p`
  padding: 0.8rem;
  display: flex;
  place-items: center;
  border-radius: 0.7rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-second);
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
  border-bottom: 1px solid var(--color-gray-fifth);
  font-size: ${({ size }) => `${size}rem`};
  padding: 0.5rem;
  font-weight: ${({ bold }) => (bold ? "700" : "400")};

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--color-blue);
  }
`

const InfoText = styled.p`
  font-weight: 500;
`

const PinImg = styled.img`
  max-width: 40vw;
  display: block;
  object-fit: contain;
`

const PinInfo = styled.div`
  padding: 2rem 2rem 0 2rem;
  width: 100%;
  max-height: 100%;
  position: relative;
`

const PinInfoSection = styled.div`
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const PinInfoLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`

const PinInfoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
`

const PinInfoText = styled.p`
  font-size: 0.9rem;
`

const PinAuthor = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
`

const PinAuthorInfo = styled.div`
  & > :first-child {
    font-weight: 700;
  }

  &:nth-child(n) :not(:first-child) {
    font-size: 0.8rem;
    font-weight: 100;
  }
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
  InfoText,
  ButtonSave,
  PinImg,
  PinInfo,
  PinInfoSection,
  PinInfoLink,
  PinInfoTitle,
  PinInfoText,
  PinAuthor,
  PinAuthorInfo,
}
