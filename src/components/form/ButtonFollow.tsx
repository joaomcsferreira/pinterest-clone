import React from "react"
import { useUserContext } from "../../UserContext"
import Button from "./Button"

interface ButtonFollowProps {
  usernameToFollow: string
}

const ButtonFollow = ({ usernameToFollow }: ButtonFollowProps) => {
  const { user, updateFollowing, updateUnfollowing } = useUserContext()

  const [type, setType] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (user && !type) {
      if (
        user.following.filter(
          (followingUser) => followingUser.username === usernameToFollow
        ).length > 0
      )
        setType("unfollow")
      else setType("follow")
    }
  }, [user])

  const followUser = (username: string) => {
    updateFollowing(username)
    setType("unfollow")
  }

  const unfollowUser = (username: string) => {
    updateUnfollowing(username)
    setType("follow")
  }

  if (user && type)
    return (
      <>
        {type === "unfollow" && (
          <Button
            onClick={() => unfollowUser(usernameToFollow)}
            color="--color-button-gray"
            padding="0.8rem"
            textDark
          >
            Unfollow
          </Button>
        )}
        {type === "follow" && (
          <Button
            onClick={() => followUser(usernameToFollow)}
            color="--color-button-red"
            padding="0.8rem"
          >
            Follow
          </Button>
        )}
      </>
    )
  else return null
}

export default ButtonFollow
