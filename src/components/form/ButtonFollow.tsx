import React from "react"
import { User, useUserContext } from "../../UserContext"
import Button from "./Button"

interface ButtonFollowProps {
  userFollow: User
}

const ButtonFollow = ({ userFollow }: ButtonFollowProps) => {
  const { user, updateFollowing, updateUnfollowing } = useUserContext()

  const followUser = (username: string) => {
    updateFollowing(username)
  }

  const unfollowUser = (username: string) => {
    updateUnfollowing(username)
  }

  if (user) {
    if (
      user.following.filter(
        (followingUser) => followingUser.username === userFollow.username
      ).length > 0
    )
      return (
        <Button
          onClick={() => unfollowUser(userFollow.username)}
          color="--color-button-gray"
          padding="0.8rem"
          textDark
        >
          Unfollow
        </Button>
      )

    if (userFollow.username !== user.username)
      return (
        <Button
          onClick={() => followUser(userFollow.username)}
          color="--color-button-red"
          padding="0.8rem"
        >
          Follow
        </Button>
      )
    else return <></>
  }
  return null
}

export default ButtonFollow
