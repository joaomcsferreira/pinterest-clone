import React from "react"
import useForm from "../../hooks/useForm"
import BoardService, { Board } from "../../services/BoardService"
import Button from "../form/Button"
import Input from "../form/Input"
import Error from "../util/Error"
import FillMode from "../util/FillMode"
import Loading from "../util/Loading"
import {
  BoardCreateActions,
  BoardCreateContainer,
  BoardCreateSection,
  ErrorContainer,
  Text,
} from "./style"

interface BoardCreateProps {
  setModal: React.Dispatch<React.SetStateAction<string>>
  setBoard: React.Dispatch<React.SetStateAction<string>>
}

const BoardCreate = ({ setModal, setBoard }: BoardCreateProps) => {
  const name = useForm()

  const { error, loading, createBoard } = BoardService()

  const handleSubmit = async () => {
    const board: Board = await createBoard(name.value)

    if (board) {
      setModal("")
      setBoard(name.value)
      name.clearValue()
    }
  }

  return (
    <>
      <FillMode full setModal={setModal} color={"rgba(0,0,0,0.6)"} />
      <BoardCreateContainer>
        <Text style={{ justifySelf: "center" }} fontSize={1.8} fontWeight={500}>
          Create Board
        </Text>
        <BoardCreateSection>
          <Text fontSize={0.8} fontWeight={400}>
            Name
          </Text>
          <Input
            type="text"
            placeholder='Like "Places to go" or "Recipes to make"'
            radius={1.2}
            {...name}
          />
        </BoardCreateSection>
        <BoardCreateActions>
          <ErrorContainer>{error && <Error error={error} />}</ErrorContainer>
          <Button onClick={() => handleSubmit()} color="red">
            Create
          </Button>
        </BoardCreateActions>

        {loading && (
          <>
            <FillMode color="rgba(255,255,255,0.6)" setModal={() => {}}>
              <Loading />
            </FillMode>
          </>
        )}
      </BoardCreateContainer>
    </>
  )
}

export default BoardCreate
