import styled, { keyframes } from "styled-components"

interface AvatarProps {
  src?: string
  size: string
}

const animeDown = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: initial;
    opacity: initial;
  }
`

const Container = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  padding: 0 1.5rem;
  gap: 1.2rem;
  position: relative;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  width: 2.8rem;
  height: 2.8rem;
  letter-spacing: -2.5px;
  color: var(--g-color-red);
  display: flex;
  align-items: center;
  gap: 2px;
`

const Icon = styled.img`
  width: 2rem;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.6rem;
`

const NavProfile = styled(Nav)`
  gap: 0;
`

const NavItem = styled.p`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const NavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: var(--g-colorGray125);
  }

  & .arrow {
    width: 2rem;
    height: 2rem;
  }
`

const IconLink = styled.img`
  padding: 0.65rem;
`

const Avatar = styled.div<AvatarProps>`
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:after {
    content: "";
    display: block;
    width: ${({ size }) => `calc(${size}rem - 0.3rem)`};
    height: ${({ size }) => `calc(${size}rem - 0.3rem)`};
    border-radius: 50%;
    background: url(${({ src }) => src}) var(--g-colorGray100);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    grid-area: 1 / -1;
  }

  & > p {
    grid-area: 1 / -1;
    z-index: 1;
    font-size: ${({ size }) => `${Number(size) * 0.5}rem`};
    text-transform: uppercase;
    font-weight: 400;
  }
`

const ProfileOptions = styled.div`
  position: absolute;
  background-color: var(--g-color-white);
  top: 5rem;
  right: 1rem;
  width: 17rem;
  padding: 0.4rem;
  border-radius: 5px;
  box-shadow: 0 0 5px 2px var(--g-colorTransparentGray20);
  z-index: 6;
  animation: ${animeDown} 0.2s linear forwards;
`

const ProfileInfo = styled.div`
  &:nth-child(n) :not(:first-child) {
    font-size: 0.8rem;
    font-weight: 100;
  }
`

const ProfileInfoItem = styled.p``

const ProfileOptionsSection = styled.div`
  width: 100%;
  margin: 1rem 0;
`

const ProfileOptionsTitle = styled.p`
  font-weight: normal;
  font-size: 0.75rem;
  padding: 0.2rem 0.4rem;
`

const ProfileOptionsItem = styled.div`
  border-radius: 10px;
  font-weight: 500;
  padding: 0.4rem 0.4rem;
  border: 5px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: var(--g-colorGray100);
    border-color: var(--g-color-skyblue);
  }
`

const Profile = styled(ProfileOptionsItem)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;
  margin: 0 0.4rem;
`

export {
  Container,
  Nav,
  NavProfile,
  NavItem,
  Logo,
  Icon,
  NavIcon,
  IconLink,
  Avatar,
  ProfileOptions,
  Profile,
  ProfileOptionsSection,
  ProfileOptionsTitle,
  ProfileOptionsItem,
  ProfileInfo,
  ProfileInfoItem,
}
