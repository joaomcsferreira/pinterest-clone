import React from "react"
import { Link } from "react-router-dom"
import BoardService from "../../services/BoardService"
import Text from "../form/Text"
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
          {boards.length > 0 ? (
            boards.map((board) => (
              <Link key={board._id} to={`/${username}/${board.name}`}>
                <BoardItem username={username} name={board.name} />
              </Link>
            ))
          ) : (
            <Text
              justify="center"
              padding="2rem 0 4rem 0"
              color="--g-colorGray175"
            >
              There are no boards saved yet.
            </Text>
          )}
        </BoardsListContainer>
      )}
    </>
  )
}

export default BoardsList
