import React from "react"
import { useFormProps } from "../../hooks/useForm"
import { User } from "../../UserContext"
import Button from "../form/Button"
import Input from "../form/Input"
import Text from "../form/Text"
import Title from "../form/Title"
import { UserEditProfileContainer, UserEditProfileSection } from "./style"

interface UserAccountProps {
  user: User
  email: useFormProps
  password: useFormProps
}

const UserAccount = ({ user, email, password }: UserAccountProps) => {
  return (
    <>
      {user && (
        <UserEditProfileContainer>
          <UserEditProfileSection>
            <Title size={1.7} weight={500}>
              Account management
            </Title>
            <Text size={1} weight={400}>
              Make changes to your email, password and account type. This
              information is private and won’t show up in your public profile.
            </Text>
          </UserEditProfileSection>

          <UserEditProfileSection>
            <Text size={0.75} weight={400}>
              Email • Private
            </Text>
            <Input type="text" placeholder="" radius={1.2} {...email} />
          </UserEditProfileSection>

          <UserEditProfileSection>
            <Text size={0.75} weight={400}>
              Password
            </Text>
            <UserEditProfileSection column>
              <Input
                type="password"
                placeholder="************"
                radius={1.2}
                {...password}
              />
              <Button color="--color-button-gray" textDark>
                Change
              </Button>
            </UserEditProfileSection>
          </UserEditProfileSection>

          <Text size={1.7} weight={500}>
            Account changes
          </Text>

          <UserEditProfileSection column>
            <UserEditProfileSection>
              <Text size={1.1} weight={500}>
                Delete your data and account
              </Text>
              <Text size={1} weight={400}>
                Delete your account and account data
              </Text>
            </UserEditProfileSection>
            <Button color="--color-button-gray" textDark>
              Delete account
            </Button>
          </UserEditProfileSection>
        </UserEditProfileContainer>
      )}
    </>
  )
}

export default UserAccount
