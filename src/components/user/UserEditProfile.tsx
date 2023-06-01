import React from "react"

import {
  ErrorContainer,
  UserMenuIcon,
  UserProfileActionsContainer,
  UserSettingContainer,
  UserSettingMenuContainer,
} from "./style"

import { User, useUserContext } from "../../UserContext"
import { imageProps } from "../pin/PinBuilder"
import { useNavigate } from "react-router-dom"

import useForm from "../../hooks/useForm"
import Button from "../form/Button"
import UserAccount from "./UserAccount"
import UserPublicProfile from "./UserPublicProfile"
import NotImplementeded from "../notFound/NotImplementeded"
import Error from "../helper/Error"
import FillMode from "../helper/FillMode"
import Loading from "../helper/Loading"
import ButtonBack from "../helper/ButtonBack"

import hamburger from "../../assets/svg/hamburger.svg"
import xmark from "../../assets/svg/xmark.svg"

const UserEditProfile = () => {
  const [typeSetting, setTypeSetting] = React.useState("public")
  const [image, setImage] = React.useState<imageProps | null>(null)
  const [modal, setModal] = React.useState("")
  const [active, setActive] = React.useState(false)

  const { loading, user, error, updateUserData } = useUserContext()
  const navigate = useNavigate()

  const firstName = useForm()
  const lastName = useForm()
  const about = useForm()
  const pronoums = useForm()
  const website = useForm()
  const username = useForm()
  const email = useForm("email")
  const password = useForm()

  const publicProfileProps = {
    firstName,
    lastName,
    about,
    pronoums,
    website,
    username,
    modal,
    image,
    setImage,
    setModal,
  }

  const userAccountProps = {
    email,
    password,
  }

  const typesSetting = [
    { type: "public", title: "Public profile" },
    { type: "personal", title: "Personal information" },
    { type: "account", title: "Account management" },
    { type: "tune", title: "Tune your home feed" },
    { type: "claimed", title: "Claimed accounts" },
    { type: "social", title: "Social permissions" },
    { type: "notifications", title: "Notifications" },
    { type: "privacy", title: "Privacy and data" },
    { type: "security", title: "Security and logins" },
    { type: "branded", title: "Branded content" },
  ]

  const handleResetInitialValue = () => {
    firstName.setInitialValue(user?.firstName)
    lastName.setInitialValue(user?.lastName)
    username.setInitialValue(user?.username)
    email.setInitialValue(user?.email)

    setImage(null)
  }

  const handleSubmit = async () => {
    const form = new FormData()

    form.append("firstName", firstName.value)
    form.append("lastName", lastName.value)
    form.append("username", username.value)
    form.append("email", email.value)
    if (image) form.append("file", image.raw)

    const result: User | null = await updateUserData(form)

    if (result?._id) {
      navigate(`/${user?.username}`)
    }
  }

  React.useEffect(() => {
    handleResetInitialValue()
  }, [user])

  return (
    <>
      <UserMenuIcon
        onClick={() => setActive((active) => !active)}
        src={!active ? hamburger : xmark}
      />

      <ButtonBack destiny={`/${user?.username}`} />

      {user && (
        <UserSettingContainer>
          <UserSettingMenuContainer active={active}>
            {typesSetting.map((type, index) => (
              <Button
                key={index}
                onClick={() => {
                  setTypeSetting(type.type)
                  setActive(false)
                }}
                active={typeSetting === type.type}
                radius={0.5}
                color={"--color-button-invisible"}
                textDark
                padding="0.5rem"
              >
                {type.title}
              </Button>
            ))}
          </UserSettingMenuContainer>

          <>
            {typeSetting === "public" && (
              <UserPublicProfile user={user} {...publicProfileProps} />
            )}
            {typeSetting === "account" && (
              <UserAccount user={user} {...userAccountProps} />
            )}
            {typeSetting !== "public" && typeSetting !== "account" && (
              <NotImplementeded />
            )}
          </>

          <UserProfileActionsContainer>
            <ErrorContainer>{error && <Error error={error} />}</ErrorContainer>
            <Button
              onClick={() => handleResetInitialValue()}
              color="--color-button-gray"
              textDark
              padding="0.5rem 0.8rem"
            >
              Reset
            </Button>
            <Button
              onClick={() => handleSubmit()}
              color="--color-button-red"
              padding="0.5rem 0.8rem"
            >
              Save
            </Button>
          </UserProfileActionsContainer>

          {loading && (
            <>
              <FillMode color="--g-colorTransparentWhite60" setModal={() => {}}>
                <Loading />
              </FillMode>
            </>
          )}
        </UserSettingContainer>
      )}
    </>
  )
}

export default UserEditProfile
