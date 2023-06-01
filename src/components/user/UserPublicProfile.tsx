import React from "react"

import { UserEditProfileContainer, UserEditProfileSection } from "./style"

import { useFormProps } from "../../hooks/useForm"
import { imageProps } from "../pin/PinBuilder"
import { User } from "../../UserContext"
import { Avatar } from "../header/style"

import Button from "../form/Button"
import Input from "../form/Input"

import UserProfileAvatar from "./ChangeAvatarProfile"
import Title from "../form/Title"
import Text from "../form/Text"

interface UserPublicProfileProps {
  user: User
  firstName: useFormProps
  lastName: useFormProps
  about: useFormProps
  pronoums: useFormProps
  website: useFormProps
  username: useFormProps
  modal: string
  image: imageProps | null
  setModal: React.Dispatch<React.SetStateAction<string>>
  setImage: React.Dispatch<React.SetStateAction<imageProps | null>>
}

const UserPublicProfile = ({
  user,
  firstName,
  lastName,
  about,
  pronoums,
  website,
  username,
  modal,
  image,
  setModal,
  setImage,
}: UserPublicProfileProps) => {
  return (
    <UserEditProfileContainer>
      <UserEditProfileSection>
        <Title size={1.7} weight={500}>
          Public profile
        </Title>
        <Text size={1} weight={400}>
          People visiting your profile will see the following info
        </Text>
      </UserEditProfileSection>

      <UserEditProfileSection>
        <Text size={0.75} weight={400}>
          Photo
        </Text>
        <UserEditProfileSection column>
          <Avatar
            size="5"
            src={
              image
                ? `${image.preview}`
                : `${user.avatar ? `${user.avatar}` : ""}`
            }
          >
            <p>{user.avatar || image ? "" : user.username?.charAt(0)}</p>
          </Avatar>
          <Button
            onClick={() => setModal("modal")}
            color="--color-button-gray"
            textDark
          >
            Change
          </Button>
        </UserEditProfileSection>
      </UserEditProfileSection>

      <UserEditProfileSection column>
        <UserEditProfileSection>
          <Text size={0.75} weight={400}>
            First Name
          </Text>
          <Input type="text" placeholder="" radius={1.2} {...firstName} />
        </UserEditProfileSection>
        <UserEditProfileSection>
          <Text size={0.75} weight={400}>
            Last name
          </Text>
          <Input type="text" placeholder="" radius={1.2} {...lastName} />
        </UserEditProfileSection>
      </UserEditProfileSection>

      <UserEditProfileSection>
        <Text size={0.75} weight={400}>
          About
        </Text>
        <Input
          type="text"
          placeholder="Tell your story"
          radius={1.2}
          {...about}
        />
      </UserEditProfileSection>

      <UserEditProfileSection>
        <Text size={0.75} weight={400}>
          Pronoums
        </Text>
        <Input
          type="text"
          placeholder="Add your pronoums"
          radius={1.2}
          {...pronoums}
        />
        <Text size={0.75} weight={400}>
          Choose up to 2 sets of pronouns to appear on your profile so others
          know how to refer to you. You can edit or remove these any time.
        </Text>
      </UserEditProfileSection>

      <UserEditProfileSection>
        <Text size={0.75} weight={400}>
          Website
        </Text>
        <Input
          type="text"
          placeholder="Add a link to drive traffic to your site"
          radius={1.2}
          {...website}
        />
      </UserEditProfileSection>

      <UserEditProfileSection>
        <Text size={0.75} weight={400}>
          Username
        </Text>
        <Input type="text" placeholder="" radius={1.2} {...username} />
        <Text size={0.75} weight={400}>
          {`www.pinterest.com/${username.value}`}
        </Text>
      </UserEditProfileSection>
      {modal && <UserProfileAvatar setImage={setImage} setModal={setModal} />}
    </UserEditProfileContainer>
  )
}

export default UserPublicProfile
