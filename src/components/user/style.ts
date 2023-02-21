import styled from "styled-components"

interface ProfileUsernameProps {
  size: string
  bold: string
  capitalize?: boolean
  color: string
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

export {
  ProfileContainer,
  ProfileInfo,
  ProfileUsername,
  ProfileActions,
  ProfilePins,
}
