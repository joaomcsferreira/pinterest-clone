import React from "react"
import { NotImplementededContainer, Text } from "./style"

const NotImplementeded = () => {
  return (
    <NotImplementededContainer>
      <Text fontSize={1.05} fontWeight={500}>
        Dear user,
      </Text>
      <Text fontSize={1.05} fontWeight={400}>
        We regret to inform you that the Pinterest page you are currently
        accessing has not been fully developed as the intention was to simulate
        only the main features of the Pinterest platform. We apologize for any
        inconvenience this may have caused.
      </Text>
      <Text fontSize={1.05} fontWeight={400}>
        Thank you for your understanding.
      </Text>
      <Text fontSize={1.05} fontWeight={400}>
        Best regards,
        <br />
        JM.
      </Text>
    </NotImplementededContainer>
  )
}

export default NotImplementeded
