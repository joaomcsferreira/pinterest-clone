import React from "react"

import { useUserContext } from "../../services/UserContext"

import { Avatar } from "../header/style"
import {
  Container,
  Actions,
  InfoContainer,
  InfoInput,
  InfoSection,
  InfoText,
  ButtonSave,
  WraperPinBuilder,
} from "./style"

import Dragzone from "../util/Dragzone"
import useForm from "../../hooks/useForm"
import PinService from "../../services/PinService"
import Loading from "../util/Loading"
import FillMode from "../util/FillMode"
import { useNavigate } from "react-router-dom"
import BoardSelect from "../board/BoardSelect"

export interface pinProps {
  preview: string
  raw: File
}

const PinBuilder = () => {
  const title = useForm()
  const description = useForm()
  const website = useForm()

  const [board, setBoard] = React.useState("")
  const [pin, setPin] = React.useState<pinProps | null>(null)

  const { user, logged } = useUserContext()
  const { loading, createPin } = PinService()

  const navigate = useNavigate()

  async function handleSubmit() {
    const form = new FormData()

    form.append("title", title.value)
    form.append("description", description.value)
    form.append("website", website.value)
    form.append("board", board)
    form.append("src", pin!.raw, pin!.raw.name)

    await createPin(form)

    if (pin) navigate("/")
  }

  return (
    <>
      {logged && user && (
        <Container>
          <WraperPinBuilder>
            <Actions>
              <BoardSelect board={board} setBoard={setBoard} />
              <ButtonSave onClick={handleSubmit}>Save</ButtonSave>
            </Actions>
            <Dragzone setPin={setPin} />
            <InfoContainer>
              <InfoContainer>
                <InfoInput
                  type="text"
                  placeholder="Add your title"
                  size={2.5}
                  bold
                  {...title}
                />
                <InfoSection>
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
                  <InfoText>{user.username}</InfoText>
                </InfoSection>
                <InfoInput
                  type="text"
                  placeholder="Tell everyone what yout Pin is about"
                  size={1}
                  {...description}
                />
              </InfoContainer>
              <InfoContainer>
                <InfoInput
                  type="text"
                  placeholder="Add a destination link"
                  size={1}
                  {...website}
                />
              </InfoContainer>
            </InfoContainer>
            {loading && (
              <>
                <FillMode color="rgba(255,255,255,0.6)" setModal={() => {}}>
                  <Loading />
                </FillMode>
              </>
            )}
          </WraperPinBuilder>
        </Container>
      )}
    </>
  )
}

export default PinBuilder
