import styled from "styled-components"

interface ProfileUsernameProps {
  size: string
  bold: string
  capitalize?: boolean
  color: string
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
  margin-top: 1rem;
`

const ProfileModal = styled.div`
  position: absolute;
  width: 35rem;
  height: 35rem;
  top: calc(50% - 17.5rem);
  left: calc(50% - 17.5rem);
  background-color: var(--g-color-white);
  border-radius: 1rem;
  padding: 2rem 0.5rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const ProfileModalSection = styled.div``

const ProfileModalSectionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  & > :nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }
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

const UserChangeAvatarContainer = styled.div`
  background-color: var(--g-color-white);
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
  background-color: var(--g-color-white);
  box-shadow: 0 0 5px 2px rgba(130, 130, 130, 0.2);
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  z-index: 4;
`

const ErrorContainer = styled.div`
  position: absolute;
  top: 0.5rem;

  & > :nth-child(1) {
    font-size: 0.9rem;
    font-weight: 700;
  }
`

export {
  ProfileContainer,
  ProfileInfo,
  ProfileUsername,
  ProfileActions,
  ProfileModal,
  ProfileModalSection,
  ProfileModalSectionItem,
  ProfilePins,
  UserSettingContainer,
  UserSettingMenuContainer,
  UserEditProfileContainer,
  UserEditProfileSection,
  UserChangeAvatarContainer,
  UserProfileActionsContainer,
  ErrorContainer,
}
