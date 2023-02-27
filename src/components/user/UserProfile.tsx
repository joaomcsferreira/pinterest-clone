import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { User, useUserContext } from "../../UserContext"
import BoardGroup from "../board/BoardList"
import Feed from "../feed/Feed"
import Button from "../form/Button"
import Text from "../form/Text"
import Title from "../form/Title"
import { Avatar } from "../header/style"
import {
  ProfileActions,
  ProfileContainer,
  ProfileInfo,
  ProfilePins,
} from "./style"

const UserProfile = () => {
  const { username } = useParams()
  const { user, getProfile } = useUserContext()

  const [feedType, setFeedType] = React.useState("created")
  const [profile, setProfile] = useState<User | null>(null)

  const navigate = useNavigate()

  React.useEffect(() => {
    async function getUser() {
      if (username) {
        const userData = await getProfile(username)

        if (!userData) navigate("/notfound", { replace: true })

        setProfile(userData)
      }
    }

    getUser()
  }, [username])

  React.useEffect(() => {
    if (!user) navigate("/", { replace: true })
  }, [user])

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

            <Title size={2.5} capitalize>
              {profile.firstName
                ? `${profile.firstName} ${profile.lastName}`
                : profile.username}
            </Title>
            <Text
              size={0.9}
              color={"--g-colorGray200"}
            >{`@${profile.username}`}</Text>

            <ProfileActions>
              <Button full color="--color-button-gray" textDark>
                Share
              </Button>
              {user?.username === profile.username && (
                <Link to={"/settings/edit-profile"}>
                  <Button full color="--color-button-gray" textDark>
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
                  active={feedType === "created"}
                  radius={0.5}
                  color={"--color-button-invisible"}
                  textDark
                  padding="0.5rem"
                >
                  Created
                </Button>
                <Button
                  onClick={() => setFeedType("saved")}
                  active={feedType === "saved"}
                  radius={0.5}
                  color={"--color-button-invisible"}
                  textDark
                  padding="0.5rem"
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
