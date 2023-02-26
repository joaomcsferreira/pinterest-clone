import React from "react"

import { NotFoundContainer, NotFoundIcon } from "./style"

import { Link } from "react-router-dom"

import Text from "../form/Text"

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundIcon>404</NotFoundIcon>
      <Text size={2} weight={500}>
        Oops!
      </Text>
      <Text size={2} weight={400}>
        The page you're looking for could not be found.
      </Text>
      <Link to={"/"}>
        <Text size={2} weight={500} color="--g-color-danger">
          Go home?
        </Text>
      </Link>
    </NotFoundContainer>
  )
}

export default NotFound
