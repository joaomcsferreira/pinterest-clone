import React from "react"
import { useFormProps } from "../../hooks/useForm"
import { User } from "../../services/UserContext"
import Button from "../form/Button"
import Input from "../form/Input"
import {
  UserEditProfileContainer,
  UserEditProfileSection,
  UserText,
} from "./style"

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
            <UserText fontSize={1.7} fontWeight={500}>
              Account management
            </UserText>
            <UserText fontSize={1} fontWeight={400}>
              Make changes to your email, password and account type. This
              information is private and won’t show up in your public profile.
            </UserText>
          </UserEditProfileSection>

          <UserEditProfileSection>
            <UserText fontSize={0.75} fontWeight={400}>
              Email • Private
            </UserText>
            <Input type="text" placeholder="" radius={1.2} {...email} />
          </UserEditProfileSection>

          <UserEditProfileSection>
            <UserText fontSize={0.75} fontWeight={400}>
              Password
            </UserText>
            <UserEditProfileSection column>
              <Input
                type="password"
                placeholder="************"
                radius={1.2}
                {...password}
              />
              <Button color="gray" invisible>
                Change
              </Button>
            </UserEditProfileSection>
          </UserEditProfileSection>

          <UserText fontSize={1.7} fontWeight={500}>
            Account changes
          </UserText>

          <UserEditProfileSection column>
            <UserEditProfileSection>
              <UserText fontSize={1.1} fontWeight={500}>
                Delete your data and account
              </UserText>
              <UserText fontSize={1} fontWeight={400}>
                Delete your account and account data
              </UserText>
            </UserEditProfileSection>
            <Button color="gray" invisible>
              Delete account
            </Button>
          </UserEditProfileSection>
        </UserEditProfileContainer>
      )}
    </>
  )
}

export default UserAccount
