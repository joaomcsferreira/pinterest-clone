import styled from "styled-components"

interface ProfileUsernameProps {
  size: string
  bold: string
  capitalize?: boolean
  color: string
}

interface UserTextProps {
  fontSize: number
  fontWeight: number
  color?: boolean
}

interface UserPublicProfileSectionProps {
  column?: boolean
}

const ProfileContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`

const ProfileUsername = styled.h3<ProfileUsernameProps>`
  font-size: ${({ size }) => `${size}rem`};
  font-weight: ${({ bold }) => `${bold}`};
  text-transform: ${({ capitalize }) => (capitalize ? "capitalize" : "none")};
  color: ${({ color }) => color};
`

const ProfileActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ProfilePins = styled.div`
  margin-top: 3rem;
`

const UserSettingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 3rem;
  margin-bottom: 6rem;

  & > :nth-child(2) {
    margin: 0 0 2rem 5rem;
    width: 50%;
  }
`

const UserSettingMenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
  gap: 0.5rem;
`

const UserEditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`

const UserEditProfileSection = styled.div<UserPublicProfileSectionProps>`
  display: flex;
  flex-direction: ${({ column }) => (column ? "row" : "column")};
  width: 100%;
  gap: 0.25rem;
  align-items: ${({ column }) => column && "center"};
`

const UserText = styled.p<UserTextProps>`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => (color ? `var(--color-gray)` : `var(--color-black)`)};
`

const UserChangeAvatarContainer = styled.div`
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0.8rem;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: calc(50% - 17.5rem);
  top: 40%;
  min-width: 35rem;
  z-index: 7;
  border-radius: 1.2rem;
`

const UserProfileActionsContainer = styled.div`
  width: 100%;
  height: 6rem;
  position: fixed;
  bottom: 0;
  background-color: var(--color-white);
  box-shadow: 0 0 5px 2px rgba(130, 130, 130, 0.2);
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  z-index: 4;
`

const ErrorContainer = styled.div`
  position: absolute;
`

export {
  ProfileContainer,
  ProfileInfo,
  ProfileUsername,
  ProfileActions,
  ProfilePins,
  UserSettingContainer,
  UserSettingMenuContainer,
  UserEditProfileContainer,
  UserEditProfileSection,
  UserText,
  UserChangeAvatarContainer,
  UserProfileActionsContainer,
  ErrorContainer,
}
