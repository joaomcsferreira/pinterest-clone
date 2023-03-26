import React from "react"
import { useUserContext } from "../../UserContext"
import FillMode from "../helper/FillMode"
import Loading from "../helper/Loading"
import Welcome from "../welcome/Welcome"
import Feed from "./Feed"
import {
  MenuMobile,
  MenuMobileModal,
  MenuMobileModalItem,
  MobileIcon,
} from "./style"

import { Avatar } from "../header/style"
import { Link } from "react-router-dom"

const Home = () => {
  const { loading, logged, logOut } = useUserContext()
  const [modal, setModal] = React.useState<string>("")

  const { user } = useUserContext()

  if (loading)
    return (
      <FillMode color="--g-colorTransparentWhite60" setModal={() => {}}>
        <Loading />
      </FillMode>
    )
  if (logged)
    return (
      <>
        <Feed type="all" />
        <MenuMobile>
          <Link to={`/`}>
            <MobileIcon>
              <svg viewBox="0 0 24 24">
                <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
              </svg>
            </MobileIcon>
          </Link>
          <Link to={`/notimplemented`}>
            <MobileIcon>
              <svg fill="#666666" viewBox="0 0 24 24">
                <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path>
              </svg>
            </MobileIcon>
          </Link>
          <Link to={"/pin-builder"}>
            <MobileIcon>
              <svg fill="#666666" viewBox="0 0 24 24">
                <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4" />
              </svg>
            </MobileIcon>
          </Link>
          <Link to={`/notimplemented`}>
            <MobileIcon>
              <svg fill="#666666" viewBox="0 0 24 24">
                <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0" />
              </svg>
            </MobileIcon>
          </Link>
          {user && (
            <Avatar
              onClick={() => setModal((modal) => (modal ? "" : "modal"))}
              size="1.8"
              src={
                user.avatar
                  ? `${process.env.REACT_APP_BASE_URL}${user.avatar}`
                  : ""
              }
            >
              <p>{user.avatar ? "" : user.username?.charAt(0)}</p>
            </Avatar>
          )}
        </MenuMobile>

        {modal && (
          <>
            <FillMode full setModal={setModal} />
            <MenuMobileModal>
              <Link to={`/${user?.username}`}>
                <MenuMobileModalItem>User Profile</MenuMobileModalItem>
              </Link>
              <MenuMobileModalItem
                onClick={() => {
                  setModal("")
                  logOut()
                }}
              >
                Log out
              </MenuMobileModalItem>
            </MenuMobileModal>
          </>
        )}
      </>
    )
  else return <Welcome />
}

export default Home
