import React from "react"
import { useParams } from "react-router-dom"
import PinService from "../../services/PinService"
import { User } from "../../services/UserContext"
import useServices from "../../services/useServices"
import Feed from "../feed/Feed"
import { Avatar } from "../header/style"
import { BoardTitle, PinsBoardContainer, PinsBoardSection } from "./style"

const BoardPins = () => {
  const { pins, getPins } = PinService()
  const { username, board } = useParams()
  const [user, setUser] = React.useState<User | null>(null)

  const { getProfile } = useServices()

  React.useEffect(() => {
    async function getUser() {
      if (username) {
        const userData = await getProfile(username)
        setUser(userData)
      }
    }

    getUser()
  }, [])

  return (
    <>
      {user && board && (
        <PinsBoardContainer>
          <PinsBoardSection>
            <BoardTitle>{board}</BoardTitle>
            <Avatar
              size="4"
              src={
                user.avatar
                  ? `${process.env.REACT_APP_BASE_URL}${user.avatar}`
                  : ""
              }
            >
              <p>{user.avatar ? "" : user.username.charAt(0)}</p>
            </Avatar>
          </PinsBoardSection>
          <PinsBoardSection>
            <BoardTitle>pins</BoardTitle>
          </PinsBoardSection>
          <Feed type="board" user={username} board={board} />
        </PinsBoardContainer>
      )}
    </>
  )
}

export default BoardPins
