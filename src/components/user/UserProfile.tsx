import React from "react"

import {
  ProfileActions,
  ProfileContainer,
  ProfileInfo,
  ProfileModal,
  ProfileModalSection,
  ProfileModalSectionItem,
  ProfilePins,
} from "./style"

import { Avatar } from "../header/style"

import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { User, useUserContext } from "../../UserContext"

import BoardGroup from "../board/BoardList"
import Feed from "../feed/Feed"
import Button from "../form/Button"
import Text from "../form/Text"
import Title from "../form/Title"
import FillMode from "../helper/FillMode"
import ButtonFollow from "../form/ButtonFollow"

const UserProfile = () => {
  const { username } = useParams()
  const { user, getProfile, reUpUser } = useUserContext()

  const [feedType, setFeedType] = React.useState("created")
  const [profile, setProfile] = React.useState<User | null>(null)

  const [modal, setModal] = React.useState("")

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
  }, [username, profile])

  React.useEffect(() => {
    reUpUser()
  }, [user?.following])

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
              <Text
                onClick={() => setModal("following")}
                capitalize
                isLink
              >{`${profile.following?.length} following`}</Text>
              •
              <Text
                onClick={() => setModal("followers")}
                capitalize
                isLink
              >{`${profile.followers?.length} followers`}</Text>
            </ProfileActions>

            <ProfileActions>
              {user?.username === profile.username ? (
                <Link to={"/settings/edit-profile"}>
                  <Button full color="--color-button-gray" textDark>
                    Edit Profile
                  </Button>
                </Link>
              ) : (
                <ButtonFollow userFollow={profile} />
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

            {modal === "following" && (
              <>
                <FillMode
                  color="--g-colorTransparentBlack60"
                  full
                  setModal={setModal}
                />

                <ProfileModal>
                  <ProfileModalSection>
                    <Title justify="center" size={1.9}>
                      Following
                    </Title>
                  </ProfileModalSection>
                  <ProfileModalSection>
                    {profile.following.length ? (
                      profile.following.map((userFollow) => (
                        <ProfileModalSectionItem key={userFollow._id}>
                          <ProfileModalSection>
                            <Avatar
                              size="4"
                              src={
                                userFollow.avatar
                                  ? `${process.env.REACT_APP_BASE_URL}${userFollow.avatar}`
                                  : ""
                              }
                            >
                              <p>
                                {userFollow.avatar
                                  ? ""
                                  : userFollow.username.charAt(0)}
                              </p>
                            </Avatar>
                            <Text weight={700} capitalize>
                              {userFollow.firstName
                                ? `${userFollow.firstName} ${userFollow.lastName}`
                                : userFollow.username}
                            </Text>
                          </ProfileModalSection>
                          <ButtonFollow userFollow={userFollow} />
                        </ProfileModalSectionItem>
                      ))
                    ) : (
                      <ProfileModalSection>
                        <Text justify="center">Nothing here yet.</Text>
                      </ProfileModalSection>
                    )}
                  </ProfileModalSection>
                </ProfileModal>
              </>
            )}
            {modal === "followers" && (
              <>
                <FillMode
                  color="--g-colorTransparentBlack60"
                  full
                  setModal={setModal}
                />

                <ProfileModal>
                  <ProfileModalSection>
                    <Title justify="center" size={1.9}>
                      Followers
                    </Title>
                  </ProfileModalSection>
                  <ProfileModalSection>
                    {profile.followers.length ? (
                      profile.followers.map((userFollow) => (
                        <ProfileModalSectionItem key={userFollow._id}>
                          <ProfileModalSection>
                            <Avatar
                              size="4"
                              src={
                                userFollow.avatar
                                  ? `${process.env.REACT_APP_BASE_URL}${userFollow.avatar}`
                                  : ""
                              }
                            >
                              <p>
                                {userFollow.avatar
                                  ? ""
                                  : userFollow.username.charAt(0)}
                              </p>
                            </Avatar>
                            <Text weight={700} capitalize>
                              {userFollow.firstName
                                ? `${userFollow.firstName} ${userFollow.lastName}`
                                : userFollow.username}
                            </Text>
                          </ProfileModalSection>
                          <ButtonFollow userFollow={userFollow} />
                        </ProfileModalSectionItem>
                      ))
                    ) : (
                      <ProfileModalSection>
                        <Text justify="center">Nothing here yet.</Text>
                      </ProfileModalSection>
                    )}
                  </ProfileModalSection>
                </ProfileModal>
              </>
            )}
          </ProfilePins>
        </ProfileContainer>
      )}
    </>
  )
}

export default UserProfile
