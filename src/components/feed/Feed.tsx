import React from "react"
import { Link } from "react-router-dom"
import PinService, { getTypesProps } from "../../services/PinService"
import FillMode from "../helper/FillMode"
import Loading from "../helper/Loading"
import MansoryLayout from "../helper/MansoryLayout"
import Text from "../form/Text"
import PinItem from "../helper/PinItem"

interface FeedProps {
  type: getTypesProps
  user?: string
  board?: string
  total?: number
}

const Feed = ({ type, user, board, total }: FeedProps) => {
  const [infinite, setInfinite] = React.useState(true)
  const [page, setPage] = React.useState(1)

  const { loading, pins, getPins } = PinService()

  React.useEffect(() => {
    let wait = false

    function infiniteScroll() {
      if (infinite) {
        const doc = document.documentElement

        const percentage =
          (100 * doc.scrollTop) / (doc.scrollHeight - doc.clientHeight)

        if (percentage > 75 && !wait) {
          setPage((page) => (page += 1))

          wait = true
          setTimeout(() => {
            wait = false
          }, 3000)
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll)
    window.addEventListener("scroll", infiniteScroll)

    return () => {
      window.removeEventListener("wheel", infiniteScroll)
      window.removeEventListener("scroll", infiniteScroll)
    }
  }, [infinite])

  React.useEffect(() => {
    getPins({ type, user, board, total, page, setInfinite })
  }, [user, page])

  return (
    <>
      <MansoryLayout gap={14.4}>
        {pins &&
          pins.map((pin) => (
            <Link to={`/pin/${pin._id}`} key={pin._id}>
              <PinItem src={`${pin.src.medium}`} title={pin.title} />
            </Link>
          ))}
      </MansoryLayout>
      {loading && page === 1 && (
        <>
          <FillMode color="--g-colorTransparentWhite60">
            <Loading />
          </FillMode>
        </>
      )}
      {!infinite && pins && pins.length > 0 ? (
        <Text justify="center" padding="1rem 0 4rem 0" color="--g-colorGray175">
          There are no more posts.
        </Text>
      ) : (
        <Text justify="center" padding="2rem 0 4rem 0" color="--g-colorGray175">
          There are no posts yet.
        </Text>
      )}
    </>
  )
}

export default Feed
