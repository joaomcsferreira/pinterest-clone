import React from "react"
import useForm from "../../hooks/useForm"
import BoardService, { Board } from "../../services/BoardService"
import Button from "../form/Button"
import Input from "../form/Input"
import Text from "../form/Text"
import Error from "../util/Error"
import FillMode from "../util/FillMode"
import Loading from "../util/Loading"
import {
  BoardCreateActions,
  BoardCreateContainer,
  BoardCreateSection,
  ErrorContainer,
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
      <FillMode
        full
        setModal={setModal}
        color={"--g-colorTransparentBlack60"}
      />
      <BoardCreateContainer>
        <Text justify="center" size={1.8} weight={500}>
          Create Board
        </Text>
        <BoardCreateSection>
          <Text size={0.8}>Name</Text>
          <Input
            type="text"
            placeholder='Like "Places to go" or "Recipes to make"'
            radius={1.2}
            {...name}
          />
        </BoardCreateSection>
        <BoardCreateActions>
          <ErrorContainer>{error && <Error error={error} />}</ErrorContainer>
          <Button onClick={() => handleSubmit()} color="--color-button-red">
            Create
          </Button>
        </BoardCreateActions>

        {loading && (
          <>
            <FillMode color="--g-colorTransparentWhite60" setModal={() => {}}>
              <Loading />
            </FillMode>
          </>
        )}
      </BoardCreateContainer>
    </>
  )
}

export default BoardCreate
