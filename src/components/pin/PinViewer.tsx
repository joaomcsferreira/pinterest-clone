import React from "react"
import { useParams } from "react-router-dom"
import CommentBuilder from "../comment/CommentBuilder"
import CommentViewer from "../comment/CommentViewer"
import { Avatar, ProfileInfoItem } from "../header/style"
import PinService from "../../services/PinService"

import { Link } from "react-router-dom"

import {
  PinInfo,
  PinInfoText,
  PinInfoLink,
  PinInfoTitle,
  WraperPinView,
  PinAuthor,
  PinAuthorInfo,
  PinInfoSection,
  PinImg,
} from "./style"

const PinViewer = () => {
  const { id } = useParams()
  const { pin, getPin } = PinService()

  React.useEffect(() => {
    if (id) getPin(id)
  }, [])

  return (
    <>
      {pin && (
        <WraperPinView>
          <PinImg src={`${process.env.REACT_APP_BASE_URL}${pin.src}`} />
          <PinInfo>
            <PinInfoSection>
              <PinInfoLink>{pin.website}</PinInfoLink>

              <PinInfoTitle>{pin.title}</PinInfoTitle>

              <PinInfoText>{pin.description}</PinInfoText>

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
                    <p>{pin.user.avatar ? "" : pin.user.username?.charAt(0)}</p>
                  </Avatar>
                  <PinAuthorInfo>
                    <ProfileInfoItem>
                      {pin.user.firstName
                        ? `${pin.user.firstName} ${pin.user.lastName}`
                        : pin.user.username}
                    </ProfileInfoItem>
                    <ProfileInfoItem>Personal</ProfileInfoItem>
                    <ProfileInfoItem>{pin.user.email}</ProfileInfoItem>
                  </PinAuthorInfo>
                </PinAuthor>
              </Link>
              <CommentViewer comments={pin.comments} />
            </PinInfoSection>
            <CommentBuilder />
          </PinInfo>
        </WraperPinView>
      )}
    </>
  )
}

export default PinViewer
