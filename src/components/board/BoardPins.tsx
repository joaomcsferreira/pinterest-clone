import React from "react"

import { BoardTitle, PinsBoardContainer, PinsBoardSection } from "./style"

import { useNavigate, useParams } from "react-router-dom"

import { User, useUserContext } from "../../UserContext"
import { Avatar } from "../header/style"

import Feed from "../feed/Feed"
import FillMode from "../util/FillMode"
import Loading from "../util/Loading"

const BoardPins = () => {
  const { username, board } = useParams()
  const [user, setUser] = React.useState<User | null>(null)

  const { loading, getProfile } = useUserContext()

  const navigate = useNavigate()

  React.useEffect(() => {
    async function getUser() {
      if (username) {
        const userData = await getProfile(username)

        if (!userData) navigate("/notfound", { replace: true })

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

          {loading && (
            <>
              <FillMode color="--g-colorTransparentWhite60" setModal={() => {}}>
                <Loading />
              </FillMode>
            </>
          )}
        </PinsBoardContainer>
      )}
    </>
  )
}

export default BoardPins
