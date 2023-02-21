import React from "react"
import { Link } from "react-router-dom"
import BoardService from "../../services/BoardService"
import BoardItem from "./BoardItem"
import { BoardsListContainer } from "./style"

interface BoardsListProps {
  username: string
}

const BoardsList = ({ username }: BoardsListProps) => {
  const { boards, getBoards } = BoardService()

  React.useEffect(() => {
    getBoards({ username })
  }, [username])

  return (
    <>
      {boards && (
        <BoardsListContainer>
          {boards.map((board) => (
            <Link key={board._id} to={`/${username}/${board.name}`}>
              <BoardItem username={username} name={board.name} />
            </Link>
          ))}
        </BoardsListContainer>
      )}
    </>
  )
}

export default BoardsList
