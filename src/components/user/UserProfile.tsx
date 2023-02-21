import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { User } from "../../services/UserContext"
import useServices from "../../services/useServices"
import BoardGroup from "../board/BoardList"
import Feed from "../feed/Feed"
import Button from "../form/Button"
import { Avatar } from "../header/style"
import {
  ProfileActions,
  ProfileContainer,
  ProfileInfo,
  ProfilePins,
  ProfileUsername,
} from "./style"

const UserProfile = () => {
  const { username } = useParams()

  const [feedType, setFeedType] = React.useState("created")
  const [user, setUser] = useState<User | null>(null)

  const { getProfile } = useServices()

  React.useEffect(() => {
    async function getUser() {
      if (username) {
        const userData = await getProfile(username)
        setUser(userData)
      }
    }

    getUser()
  }, [username])

  return (
    <>
      {user && (
        <ProfileContainer>
          <ProfileInfo>
            <Avatar
              size="8"
              src={
                user.avatar
                  ? `${process.env.REACT_APP_BASE_URL}${user.avatar}`
                  : ""
              }
            >
              <p>{user.avatar ? "" : user.username.charAt(0)}</p>
            </Avatar>
            <ProfileUsername
              color="var(--color-black)"
              size="2.5"
              bold="500"
              capitalize
            >
              {user.firstName
                ? `${user.firstName} ${user.lastName}`
                : user.username}
            </ProfileUsername>
            <ProfileUsername color="var(--color-gray)" size="0.9" bold="400">
              {`@${user.username}`}
            </ProfileUsername>
            <ProfileUsername
              color="var(--color-black)"
              size="1"
              bold="400"
              capitalize
            >
              0 following
            </ProfileUsername>
            <ProfileActions>
              <Button color="gray" invisible>
                Share
              </Button>
              <Button color="gray" invisible>
                Edit Profile
              </Button>
            </ProfileActions>
          </ProfileInfo>

          <ProfilePins>
            <ProfileInfo>
              <ProfileActions>
                <Button
                  onClick={() => setFeedType("created")}
                  invisible
                  active={feedType === "created"}
                  radius={0.5}
                >
                  Created
                </Button>
                <Button
                  onClick={() => setFeedType("saved")}
                  invisible
                  active={feedType === "saved"}
                  radius={0.5}
                >
                  Saved
                </Button>
              </ProfileActions>
            </ProfileInfo>
            {feedType === "created" ? (
              <Feed type="user" user={user.username} />
            ) : (
              <BoardGroup username={user.username} />
            )}
          </ProfilePins>
        </ProfileContainer>
      )}
    </>
  )
}

export default UserProfile
