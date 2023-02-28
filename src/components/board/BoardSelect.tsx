import React from "react"
import { useUserContext } from "../../UserContext"

import BoardService from "../../services/BoardService"

import BoardCreate from "./BoardCreate"

import {
  BoardCreateButtonContainer,
  BoardIcon,
  Select,
  SelectContainer,
  SelectOption,
  SelectOptions,
  SelectOptionsItems,
} from "./style"

import plus from "../../assets/svg/plus.svg"
import FillMode from "../helper/FillMode"
import Text from "../form/Text"

interface BoardSelectProps {
  board: string
  setBoard: React.Dispatch<React.SetStateAction<string>>
}

const BoardSelect = ({ board, setBoard }: BoardSelectProps) => {
  const [modal, setModal] = React.useState("")

  const { user } = useUserContext()

  const { getBoards, boards } = BoardService()

  React.useEffect(() => {
    if (user) getBoards({ username: user.username })
  }, [boards])

  return (
    <SelectContainer>
      <Select onClick={() => setModal("select")}>
        {!board ? "Select a board" : board}
      </Select>
      {modal === "select" && (
        <SelectOptions>
          <FillMode full setModal={setModal} />
          <SelectOptionsItems>
            <>
              {boards &&
                boards.map((board) => (
                  <SelectOption
                    key={board.name}
                    onClick={() => {
                      setBoard(board.name)
                      setModal("")
                    }}
                  >
                    {board.name}
                  </SelectOption>
                ))}
            </>
          </SelectOptionsItems>
          <BoardCreateButtonContainer onClick={() => setModal("create")}>
            <BoardIcon src={plus} />
            <Text weight={500}>Create board</Text>
          </BoardCreateButtonContainer>
        </SelectOptions>
      )}
      {modal === "create" && (
        <BoardCreate setBoard={setBoard} setModal={setModal} />
      )}
    </SelectContainer>
  )
}

export default BoardSelect
