import React from "react"
import { Link } from "react-router-dom"
import { NotFoundContainer, NotFoundIcon, Text } from "./style"

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundIcon>404</NotFoundIcon>
      <Text fontSize={2} fontWeight={500}>
        Oops!
      </Text>
      <Text fontSize={2} fontWeight={400}>
        The page you're looking for could not be found.
      </Text>
      <Link to={"/"}>
        <Text fontSize={2} fontWeight={500} color="var(--color-red)">
          Go home?
        </Text>
      </Link>
    </NotFoundContainer>
  )
}

export default NotFound
