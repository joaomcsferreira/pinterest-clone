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

import Dragzone from "../helper/Dragzone"
import useForm from "../../hooks/useForm"
import PinService from "../../services/PinService"
import Loading from "../helper/Loading"
import FillMode from "../helper/FillMode"
import { useNavigate } from "react-router-dom"
import BoardSelect from "../board/BoardSelect"
import Error from "../helper/Error"
import Text from "../form/Text"
import ButtonBack from "../helper/ButtonBack"

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
  const [image64, setImage64] = React.useState("")

  const { user, logged } = useUserContext()
  const { loading, error, createPin } = PinService()

  const [pinBlank, setPinBlank] = React.useState(false)

  const navigate = useNavigate()

  const convertToBase64 = (pin: File | undefined) => {
    if (pin) {
      const reader = new FileReader()

      reader.readAsDataURL(pin)

      reader.onload = () => {
        setImage64(`${reader.result}`)
      }
    }
  }

  async function handleSubmit() {
    if (pin) {
      const form = {
        title: title.value,
        description: description.value,
        website: website.value,
        board: board,
        src: image64,
      }

      const result: Pin | null = await createPin(form)

      if (result?._id) navigate("/")
    } else {
      setPinBlank(true)
    }
  }

  React.useEffect(() => {
    setPinBlank(false)

    convertToBase64(pin?.raw)
  }, [pin])

  return (
    <>
      {logged && user && (
        <Container>
          <ButtonBack />

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
                  <Avatar size="3" src={user.avatar ? `${user.avatar}` : ""}>
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
