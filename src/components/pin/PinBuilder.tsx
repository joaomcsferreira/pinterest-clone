import React from "react"

import { useUserContext } from "../../UserContext"
import { Pin } from "../../services/PinService"

import { Avatar } from "../header/style"
import {
  Container,
  Actions,
  InfoContainer,
  InfoInput,
  InfoSection,
  ButtonSave,
  WraperPinBuilder,
  ErrorPostion,
} from "./style"

import Dragzone from "../util/Dragzone"
import useForm from "../../hooks/useForm"
import PinService from "../../services/PinService"
import Loading from "../util/Loading"
import FillMode from "../util/FillMode"
import { useNavigate } from "react-router-dom"
import BoardSelect from "../board/BoardSelect"
import Error from "../util/Error"
import Text from "../form/Text"

export interface imageProps {
  preview: string
  raw: File
}

const PinBuilder = () => {
  const title = useForm()
  const description = useForm()
  const website = useForm()

  const [board, setBoard] = React.useState("")
  const [pin, setPin] = React.useState<imageProps | null>(null)

  const { user, logged } = useUserContext()
  const { loading, error, createPin } = PinService()

  const [pinBlank, setPinBlank] = React.useState(false)

  const navigate = useNavigate()

  async function handleSubmit() {
    if (pin) {
      const form = new FormData()

      form.append("title", title.value)
      form.append("description", description.value)
      form.append("website", website.value)
      form.append("board", board)
      form.append("src", pin!.raw, pin!.raw.name)

      const result: Pin | null = await createPin(form)

      if (result?._id) navigate("/")
    } else {
      setPinBlank(true)
    }
  }

  React.useEffect(() => {
    setPinBlank(false)
  }, [pin])

  return (
    <>
      {logged && user && (
        <Container>
          <WraperPinBuilder>
            <Actions>
              <ErrorPostion>{error && <Error error={error} />}</ErrorPostion>
              <BoardSelect board={board} setBoard={setBoard} />
              <ButtonSave onClick={handleSubmit}>Save</ButtonSave>
            </Actions>
            <Dragzone pinBlank={pinBlank} setPin={setPin} />
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
                  <Text>{user.username}</Text>
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
                <FillMode color="--g-colorTransparentWhite60" full>
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
