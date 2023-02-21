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
  ProfileOptionsTitle,
  ProfileOptionsItem,
  ProfileInfo,
  Profile,
  ProfileInfoItem,
  Avatar,
  NavProfile,
} from "./style"
import { useUserContext } from "../../services/UserContext"

import logo from "../../assets/svg/logo.svg"
import bell from "../../assets/svg/bell.svg"
import message from "../../assets/svg/message.svg"
import arrow from "../../assets/svg/arrowDown.svg"

import Button from "../form/Button"
import Login from "../login/Login"
import Signup from "../login/Signup"
import FillMode from "../util/FillMode"
import Input from "../form/Input"
import useForm from "../../hooks/useForm"
import { Link } from "react-router-dom"

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
            <Button color="black">Home</Button>
            <Link to={"/pin-builder"}>
              <Button invisible>Create</Button>
            </Link>
          </Nav>
          <Input
            blank
            color
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
                <FillMode fullScreen setModal={setModal} />
                <ProfileOptions>
                  <ProfileOptionsSection>
                    <ProfileOptionsTitle>Currently in</ProfileOptionsTitle>
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
                          <ProfileInfoItem>
                            {user.firstName
                              ? `${user.firstName} ${user.lastName}`
                              : user.username}
                          </ProfileInfoItem>
                          <ProfileInfoItem>Personal</ProfileInfoItem>
                          <ProfileInfoItem>{user.email}</ProfileInfoItem>
                        </ProfileInfo>
                      </Profile>
                    </Link>
                  </ProfileOptionsSection>
                  <ProfileOptionsSection>
                    <ProfileOptionsTitle>Your accounts</ProfileOptionsTitle>
                    <ProfileOptionsItem>Add account</ProfileOptionsItem>
                    <ProfileOptionsItem>Convert to business</ProfileOptionsItem>
                  </ProfileOptionsSection>
                  <ProfileOptionsSection>
                    <ProfileOptionsTitle>More options</ProfileOptionsTitle>
                    <ProfileOptionsItem>Settings</ProfileOptionsItem>
                    <ProfileOptionsItem>Tune your home feed</ProfileOptionsItem>
                    <ProfileOptionsItem>
                      Install the Windows app
                    </ProfileOptionsItem>
                    <ProfileOptionsItem>Your privacy rights</ProfileOptionsItem>
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
            <Button onClick={() => setModal("login")} color="red">
              Log in
            </Button>
            <Button color="gray" invisible onClick={() => setModal("signup")}>
              Sign up
            </Button>
          </Nav>
          {modal === "login" && (
            <>
              <FillMode
                fullScreen
                color="rgba(0,0,0,0.6)"
                setModal={setModal}
              />
              <Login setModal={setModal} />
            </>
          )}
          {modal === "signup" && (
            <>
              <FillMode
                fullScreen
                color="rgba(0,0,0,0.6)"
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
