import React from "react"

import {
  UserProfileActionsContainer,
  UserSettingContainer,
  UserSettingMenuContainer,
} from "./style"

import { User, useUserContext } from "../../services/UserContext"
import { imageProps } from "../pin/PinBuilder"
import { useNavigate } from "react-router-dom"

import useForm from "../../hooks/useForm"
import Button from "../form/Button"
import UserAccount from "./UserAccount"
import UserPublicProfile from "./UserPublicProfile"
import NotImplementeded from "../notFound/NotImplementeded"
import useServices from "../../services/useServices"

const UserEditProfile = () => {
  const [typeSetting, setTypeSetting] = React.useState("public")
  const [image, setImage] = React.useState<imageProps | null>(null)
  const [modal, setModal] = React.useState("")

  const { user, reUpUser } = useUserContext()
  const { updateDoc } = useServices()
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
    if (image) form.append("avatar", image.raw)

    const result: User | null = await updateDoc("user", form)

    if (result?._id) {
      reUpUser()
      navigate(`/${user?.username}`)
    }
  }

  React.useEffect(() => {
    handleResetInitialValue()
  }, [user])

  return (
    <>
      {user && (
        <UserSettingContainer>
          <UserSettingMenuContainer>
            {typesSetting.map((type, index) => (
              <Button
                key={index}
                size="strech"
                onClick={() => setTypeSetting(type.type)}
                active={typeSetting === type.type}
                invisible
                radius={0.5}
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
            <Button
              onClick={() => handleResetInitialValue()}
              color="gray"
              invisible
            >
              Reset
            </Button>
            <Button onClick={() => handleSubmit()} color="red">
              Save
            </Button>
          </UserProfileActionsContainer>
        </UserSettingContainer>
      )}
    </>
  )
}

export default UserEditProfile
