import React from "react"

import {
  UserEditProfileContainer,
  UserEditProfileSection,
  UserText,
} from "./style"

import { useFormProps } from "../../hooks/useForm"
import { imageProps } from "../pin/PinBuilder"
import { User } from "../../UserContext"
import { Avatar } from "../header/style"

import Button from "../form/Button"
import Input from "../form/Input"

import UserProfileAvatar from "./ChangeAvatarProfile"

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
        <UserText fontSize={1.7} fontWeight={500}>
          Public profile
        </UserText>
        <UserText fontSize={1} fontWeight={400}>
          People visiting your profile will see the following info
        </UserText>
      </UserEditProfileSection>

      <UserEditProfileSection>
        <UserText fontSize={0.75} fontWeight={400}>
          Photo
        </UserText>
        <UserEditProfileSection column>
          <Avatar
            size="5"
            src={
              image
                ? `${image.preview}`
                : `${
                    user.avatar
                      ? `${process.env.REACT_APP_BASE_URL}${user.avatar}`
                      : ""
                  }`
            }
          >
            <p>{user.avatar || image ? "" : user.username?.charAt(0)}</p>
          </Avatar>
          <Button onClick={() => setModal("modal")} color="gray" invisible>
            Change
          </Button>
        </UserEditProfileSection>
      </UserEditProfileSection>

      <UserEditProfileSection column>
        <UserEditProfileSection>
          <UserText fontSize={0.75} fontWeight={400}>
            First Name
          </UserText>
          <Input type="text" placeholder="" radius={1.2} {...firstName} />
        </UserEditProfileSection>
        <UserEditProfileSection>
          <UserText fontSize={0.75} fontWeight={400}>
            Last name
          </UserText>
          <Input type="text" placeholder="" radius={1.2} {...lastName} />
        </UserEditProfileSection>
      </UserEditProfileSection>

      <UserEditProfileSection>
        <UserText fontSize={0.75} fontWeight={400}>
          About
        </UserText>
        <Input
          type="text"
          placeholder="Tell your story"
          radius={1.2}
          {...about}
        />
      </UserEditProfileSection>

      <UserEditProfileSection>
        <UserText fontSize={0.75} fontWeight={400}>
          Pronoums
        </UserText>
        <Input
          type="text"
          placeholder="Add your pronoums"
          radius={1.2}
          {...pronoums}
        />
        <UserText fontSize={0.75} fontWeight={400}>
          Choose up to 2 sets of pronouns to appear on your profile so others
          know how to refer to you. You can edit or remove these any time.
        </UserText>
      </UserEditProfileSection>

      <UserEditProfileSection>
        <UserText fontSize={0.75} fontWeight={400}>
          Website
        </UserText>
        <Input
          type="text"
          placeholder="Add a link to drive traffic to your site"
          radius={1.2}
          {...website}
        />
      </UserEditProfileSection>

      <UserEditProfileSection>
        <UserText fontSize={0.75} fontWeight={400}>
          Username
        </UserText>
        <Input type="text" placeholder="" radius={1.2} {...username} />
        <UserText fontSize={0.75} fontWeight={400}>
          {`www.pinterest.com/${username.value}`}
        </UserText>
      </UserEditProfileSection>
      {modal && <UserProfileAvatar setImage={setImage} setModal={setModal} />}
    </UserEditProfileContainer>
  )
}

export default UserPublicProfile
