import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { User, useUserContext } from "../../UserContext"
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
  const { user } = useUserContext()

  const [feedType, setFeedType] = React.useState("created")
  const [profile, setProfile] = useState<User | null>(null)

  const { getProfile } = useServices()

  React.useEffect(() => {
    async function getUser() {
      if (username) {
        const userData = await getProfile(username)
        setProfile(userData)
      }
    }

    getUser()
  }, [username])

  return (
    <>
      {profile && (
        <ProfileContainer>
          <ProfileInfo>
            <Avatar
              size="8"
              src={
                profile.avatar
                  ? `${process.env.REACT_APP_BASE_URL}${profile.avatar}`
                  : ""
              }
            >
              <p>{profile.avatar ? "" : profile.username.charAt(0)}</p>
            </Avatar>
            <ProfileUsername
              color="var(--color-black)"
              size="2.5"
              bold="500"
              capitalize
            >
              {profile.firstName
                ? `${profile.firstName} ${profile.lastName}`
                : profile.username}
            </ProfileUsername>
            <ProfileUsername color="var(--color-gray)" size="0.9" bold="400">
              {`@${profile.username}`}
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
              <Button size="full" color="gray" invisible>
                Share
              </Button>
              {user?.username === profile.username && (
                <Link to={"/settings/edit-profile"}>
                  <Button size="full" color="gray" invisible>
                    Edit Profile
                  </Button>
                </Link>
              )}
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
              <Feed type="user" user={profile.username} />
            ) : (
              <BoardGroup username={profile.username} />
            )}
          </ProfilePins>
        </ProfileContainer>
      )}
    </>
  )
}

export default UserProfile
