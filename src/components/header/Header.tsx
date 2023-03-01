import React from "react"

import {
  Container,
  NavIcon,
  Nav,
  NavItem,
  IconLink,
  Logo,
  ProfileOptions,
  ProfileOptionsSection,
  ProfileOptionsItem,
  ProfileInfo,
  Profile,
  Avatar,
  NavProfile,
} from "./style"
import { useUserContext } from "../../UserContext"

import logo from "../../assets/svg/logo.svg"
import bell from "../../assets/svg/bell.svg"
import message from "../../assets/svg/message.svg"
import arrow from "../../assets/svg/arrowDown.svg"

import Button from "../form/Button"
import Login from "../login/Login"
import Signup from "../login/Signup"
import FillMode from "../helper/FillMode"
import Input from "../form/Input"
import useForm from "../../hooks/useForm"
import { Link } from "react-router-dom"
import Text from "../form/Text"

const Header = () => {
  const [modal, setModal] = React.useState("")

  const { user, logged, logOut } = useUserContext()

  const search = useForm()

  return (
    <>
      {logged && user ? (
        <Container>
          <Nav>
            <NavIcon>
              <Link to="/">
                <Logo>
                  <IconLink src={logo} title="Pinterest" alt="Pinterest" />
                </Logo>
              </Link>
            </NavIcon>
            <Link to="/">
              <Button color="--color-button-black">Home</Button>
            </Link>
            <Link to={"/pin-builder"}>
              <Button textDark color="--color-button-invisible">
                Create
              </Button>
            </Link>
          </Nav>
          <Input
            blank
            color
            background="--g-colorGray75"
            type="text"
            placeholder="Search"
            radius={1.7}
            {...search}
          />
          <NavProfile>
            <NavIcon>
              <IconLink src={bell} alt="icon notification" />
            </NavIcon>
            <NavIcon>
              <IconLink src={message} />
            </NavIcon>
            <NavIcon>
              <Link to={`/${user.username}`}>
                <Avatar
                  size="1.8"
                  src={
                    user.avatar
                      ? `${process.env.REACT_APP_BASE_URL}${user.avatar}`
                      : ""
                  }
                >
                  <p>{user.avatar ? "" : user.username?.charAt(0)}</p>
                </Avatar>
              </Link>
            </NavIcon>
            <NavIcon
              onClick={() =>
                setModal((modal) =>
                  modal === "profileOptions" ? "" : "profileOptions"
                )
              }
            >
              <IconLink className="arrow" src={arrow} />
            </NavIcon>
            {modal === "profileOptions" && (
              <>
                <FillMode full setModal={setModal} />
                <ProfileOptions>
                  <ProfileOptionsSection>
                    <Text padding="0.2rem 0.4rem" size={0.75}>
                      Currently in
                    </Text>
                    <Link to={`/${user.username}`}>
                      <Profile>
                        <Avatar
                          size="4"
                          src={
                            user.avatar
                              ? `${process.env.REACT_APP_BASE_URL}${user.avatar}`
                              : ""
                          }
                        >
                          <p>{user.avatar ? "" : user.username?.charAt(0)}</p>
                        </Avatar>
                        <ProfileInfo>
                          <Text weight={500} capitalize>
                            {user.firstName
                              ? `${user.firstName} ${user.lastName}`
                              : user.username}
                          </Text>
                          <Text>Personal</Text>
                          <Text>{user.email}</Text>
                        </ProfileInfo>
                      </Profile>
                    </Link>
                  </ProfileOptionsSection>
                  <ProfileOptionsSection>
                    <Text padding="0.2rem 0.4rem" size={0.75}>
                      Your accounts
                    </Text>
                    <Link to={`/notimplemented`}>
                      <ProfileOptionsItem>Add account</ProfileOptionsItem>
                    </Link>

                    <Link to={`/notimplemented`}>
                      <ProfileOptionsItem>
                        Convert to business
                      </ProfileOptionsItem>
                    </Link>
                  </ProfileOptionsSection>
                  <ProfileOptionsSection>
                    <Text padding="0.2rem 0.4rem" size={0.75}>
                      More options
                    </Text>
                    <Link to={`/settings/edit-profile`}>
                      <ProfileOptionsItem>Settings</ProfileOptionsItem>
                    </Link>
                    <Link to={`/notimplemented`}>
                      <ProfileOptionsItem>
                        Tune your home feed
                      </ProfileOptionsItem>
                    </Link>
                    <Link to={`/notimplemented`}>
                      <ProfileOptionsItem>
                        Install the Windows app
                      </ProfileOptionsItem>
                    </Link>
                    <Link to={`/notimplemented`}>
                      <ProfileOptionsItem>
                        Your privacy rights
                      </ProfileOptionsItem>
                    </Link>
                    <ProfileOptionsItem
                      onClick={() => {
                        setModal("")
                        logOut()
                      }}
                    >
                      Log out
                    </ProfileOptionsItem>
                  </ProfileOptionsSection>
                </ProfileOptions>
              </>
            )}
          </NavProfile>
        </Container>
      ) : (
        <Container>
          <Link to="/">
            <Logo>
              <IconLink src={logo} title="Pinterest" alt="Pinterest" />
              Pinterest
            </Logo>
          </Link>
          <Nav>
            <NavItem>About</NavItem>
            <NavItem>Business</NavItem>
            <NavItem>Blog</NavItem>
            <Button
              full
              onClick={() => setModal("login")}
              color="--color-button-red"
            >
              Log in
            </Button>
            <Button
              full
              color="--color-button-gray"
              textDark
              onClick={() => setModal("signup")}
            >
              Sign up
            </Button>
          </Nav>
          {modal === "login" && (
            <>
              <FillMode
                full
                color="--g-colorTransparentBlack60"
                setModal={setModal}
              />
              <Login setModal={setModal} />
            </>
          )}
          {modal === "signup" && (
            <>
              <FillMode
                full
                color="--g-colorTransparentBlack60"
                setModal={setModal}
              />
              <Signup setModal={setModal} />
            </>
          )}
        </Container>
      )}
    </>
  )
}

export default Header
