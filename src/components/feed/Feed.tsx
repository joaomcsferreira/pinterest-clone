import React from "react"
import { Link } from "react-router-dom"
import PinService, { getTypesProps } from "../../services/PinService"
import { FeedContainer, Img, ImgContainer } from "./style"

interface FeedProps {
  type: getTypesProps
  user?: string
  board?: string
  total?: number
}

const Feed = ({ type, user, board, total }: FeedProps) => {
  const { pins, getPins } = PinService()

  React.useEffect(() => {
    getPins({ type, user, board, total })
  }, [user])

  return (
    <FeedContainer>
      {pins &&
        pins.map((pin) => (
          <Link to={`/pin/${pin._id}`} key={pin._id}>
            <ImgContainer>
              <Img src={`${process.env.REACT_APP_BASE_URL}${pin.src}`} />
            </ImgContainer>
          </Link>
        ))}
      {/* There aren’t any Pins on this board yet */}
    </FeedContainer>
  )
}

export default Feed
