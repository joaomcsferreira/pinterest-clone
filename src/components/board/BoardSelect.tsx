import React from "react"
import { useUserContext } from "../../UserContext"

import BoardService from "../../services/BoardService"

import useForm from "../../hooks/useForm"

import Button from "../form/Button"
import Input from "../form/Input"
import Error from "../util/Error"

import {
  ErrorContainer,
  Select,
  SelectOption,
  SelectOptions,
  SelectOptionsItems,
} from "./style"

interface BoardSelectProps {
  board: string
  setBoard: React.Dispatch<React.SetStateAction<string>>
}

const BoardSelect = ({ board, setBoard }: BoardSelectProps) => {
  const [modal, setModal] = React.useState(false)

  const nameBoard = useForm()

  const { user } = useUserContext()

  const { createBoard, getBoards, boards, error } = BoardService()

  const handleClick = () => {
    setModal((modal) => !modal)
  }

  const handleSubmit = async () => {
    createBoard(nameBoard.value)

    nameBoard.clearValue()
  }

  React.useEffect(() => {
    if (user) getBoards({ username: user.username })
  }, [boards])

  return (
    <>
      <Select onClick={handleClick}>{!board ? "Select a board" : board}</Select>
      {modal && (
        <SelectOptions>
          <SelectOptionsItems>
            <>
              {boards &&
                boards.map((board) => (
                  <SelectOption
                    key={board.name}
                    onClick={() => {
                      setBoard(board.name)
                      handleClick()
                    }}
                  >
                    {board.name}
                  </SelectOption>
                ))}
            </>
          </SelectOptionsItems>
          Create another one
          <Input
            type="text"
            placeholder="Name the new board"
            radius={1.5}
            {...nameBoard}
          />
          <Button onClick={handleSubmit} color="red">
            Create
          </Button>
        </SelectOptions>
      )}
    </>
  )
}

export default BoardSelect
