import React from "react"

import {
  PinInfo,
  PinInfoLink,
  WraperPinView,
  PinAuthor,
  PinAuthorInfo,
  PinInfoSection,
  PinImg,
} from "./style"

import { Avatar } from "../header/style"

import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { useUserContext } from "../../UserContext"

import CommentBuilder from "../comment/CommentBuilder"
import CommentViewer from "../comment/CommentViewer"
import PinService from "../../services/PinService"
import Button from "../form/Button"
import PinEdit from "./PinEdit"
import Title from "../form/Title"
import Text from "../form/Text"

const PinViewer = () => {
  const [modal, setModal] = React.useState("")

  const { id } = useParams()
  const { pin, getPin } = PinService()

  const { user } = useUserContext()

  const navigate = useNavigate()

  React.useEffect(() => {
    async function getPinData() {
      if (id) {
        const pinData = await getPin(id)

        if (!pinData) navigate("/notfound", { replace: true })
      }
    }

    getPinData()
  }, [])

  return (
    <>
      {pin && (
        <>
          <WraperPinView>
            <PinImg src={`${process.env.REACT_APP_BASE_URL}${pin.src}`} />
            <PinInfo>
              <PinInfoSection>
                {user?.username === pin.user.username && (
                  <Button
                    onClick={() => setModal("edit")}
                    color={"--color-button-invisible"}
                    textDark
                  >
                    Edit pin
                  </Button>
                )}

                <PinInfoLink>{pin.website}</PinInfoLink>

                <Title size={2.2}>{pin.title}</Title>

                <Text size={0.9}>{pin.description}</Text>

                <Link to={`/${pin.user.username}`}>
                  <PinAuthor>
                    <Avatar
                      size="4"
                      src={
                        pin.user.avatar
                          ? `${process.env.REACT_APP_BASE_URL}${pin.user.avatar}`
                          : ""
                      }
                    >
                      <p>
                        {pin.user.avatar ? "" : pin.user.username?.charAt(0)}
                      </p>
                    </Avatar>
                    <PinAuthorInfo>
                      <Text weight={500} capitalize>
                        {pin.user.firstName
                          ? `${pin.user.firstName} ${pin.user.lastName}`
                          : pin.user.username}
                      </Text>
                      <Text size={0.8} weight={100}>
                        0 followers
                      </Text>
                    </PinAuthorInfo>
                  </PinAuthor>
                </Link>
                <CommentViewer comments={pin.comments} />
              </PinInfoSection>
              <CommentBuilder />
            </PinInfo>
          </WraperPinView>
          {modal && <PinEdit pin={pin} setModal={setModal} />}
        </>
      )}
    </>
  )
}

export default PinViewer
