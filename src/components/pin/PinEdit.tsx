import React from "react"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import PinService, { Pin } from "../../services/PinService"
import BoardSelect from "../board/BoardSelect"
import Button from "../form/Button"
import Input from "../form/Input"
import Text from "../form/Text"
import Title from "../form/Title"
import Error from "../helper/Error"
import FillMode from "../helper/FillMode"
import Loading from "../helper/Loading"
import {
  InfoSection,
  PinEditSection,
  PinImg,
  PinInfo,
  WraperPinEdit,
  PinDeleteContainer,
} from "./style"

interface PinEditProps {
  pin: Pin
  setModal: React.Dispatch<React.SetStateAction<string>>
}

const PinEdit = ({ pin, setModal }: PinEditProps) => {
  const [board, setBoard] = React.useState("")
  const [surfaceModal, setSurfaceModal] = React.useState("")

  const title = useForm()
  const description = useForm()
  const website = useForm()

  const { updatePinData, deletePin, error, loading } = PinService()

  const navigate = useNavigate()

  const handleResetInitialValue = () => {
    setBoard(pin.board.name)

    title.setInitialValue(pin.title)
    description.setInitialValue(pin.description)
    website.setInitialValue(pin.website)
  }

  const handleSubmit = async () => {
    const values = {
      id: pin._id,
      title: title.value,
      description: description.value,
      website: website.value,
      board,
    }

    const result: Pin | null = await updatePinData(values)

    if (result?._id) window.location.reload()
  }

  const handleDeletePin = async () => {
    await deletePin(pin._id)

    navigate(`/${pin.user.username}`)
  }

  React.useEffect(() => {
    handleResetInitialValue()
  }, [])

  return (
    <>
      <FillMode setModal={setModal} full color="--g-colorTransparentBlack60" />
      <WraperPinEdit>
        <Title justify="center" size={2.5}>
          Edit this Pin
        </Title>
        <PinInfo style={{ gap: "0rem" }}>
          <PinEditSection>
            <Text weight={400}>Organize to a board</Text>
            <BoardSelect board={board} setBoard={setBoard} />
          </PinEditSection>
          <PinEditSection>
            <Text weight={400}>Define what your Pin is about.</Text>
            <Input
              type="text"
              placeholder="Add your title"
              radius={1.2}
              {...title}
            />
          </PinEditSection>
          <PinEditSection>
            <Text weight={400}>Describe it</Text>
            <Input
              type="text"
              placeholder="Tell everyone what yout Pin is about"
              radius={1.2}
              {...description}
            />
          </PinEditSection>
          <PinEditSection>
            <Text weight={400}>Add a link for further information.</Text>
            <Input
              type="text"
              placeholder="Add a destination link"
              radius={1.2}
              {...website}
            />
          </PinEditSection>
        </PinInfo>

        <PinImg src={`${process.env.REACT_APP_BASE_URL}${pin.src}`} />

        <InfoSection style={{ justifyContent: "space-between" }}>
          <Button
            onClick={() => setSurfaceModal("surface")}
            color="--color-button-gray"
            textDark
          >
            Delete
          </Button>
          {error && <Error error={error} />}
          <PinEditSection>
            <Button
              onClick={() => setModal("")}
              color="--color-button-gray"
              textDark
            >
              Cancel
            </Button>
            <Button onClick={() => handleSubmit()} color="--color-button-red">
              Save
            </Button>
          </PinEditSection>
        </InfoSection>

        {surfaceModal && (
          <>
            <FillMode
              color="--g-colorTransparentBlack60"
              full
              setModal={setSurfaceModal}
            />
            <PinDeleteContainer>
              <Text weight={500}>
                Are you sure you want to delete this Pin?
              </Text>
              <PinEditSection>
                <Button
                  onClick={() => setSurfaceModal("")}
                  color="--color-button-gray"
                  textDark
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleDeletePin()}
                  color="--color-button-red"
                >
                  Delete
                </Button>
              </PinEditSection>
            </PinDeleteContainer>
          </>
        )}

        {loading && (
          <>
            <FillMode color="--g-colorTransparentWhite60" setModal={() => {}}>
              <Loading />
            </FillMode>
          </>
        )}
      </WraperPinEdit>
    </>
  )
}

export default PinEdit
