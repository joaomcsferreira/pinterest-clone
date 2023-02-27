import React from "react"
import { Link } from "react-router-dom"
import PinService, { getTypesProps } from "../../services/PinService"
import FillMode from "../util/FillMode"
import Loading from "../util/Loading"
import MansoryLayout from "../util/MansoryLayout"
import { Img, ImgContainer } from "./style"

interface FeedProps {
  type: getTypesProps
  user?: string
  board?: string
  total?: number
}

const Feed = ({ type, user, board, total }: FeedProps) => {
  const { loading, pins, getPins } = PinService()

  React.useEffect(() => {
    getPins({ type, user, board, total })
  }, [user])

  return (
    <>
      <MansoryLayout columnCount={5} gap={14.4}>
        {pins &&
          pins.map((pin) => (
            <Link to={`/pin/${pin._id}`} key={pin._id}>
              <ImgContainer>
                <Img src={`${process.env.REACT_APP_BASE_URL}${pin.src}`} />
              </ImgContainer>
            </Link>
          ))}
      </MansoryLayout>
      {loading && (
        <>
          <FillMode color="--g-colorTransparentWhite60">
            <Loading />
          </FillMode>
        </>
      )}
    </>
  )
}

export default Feed
