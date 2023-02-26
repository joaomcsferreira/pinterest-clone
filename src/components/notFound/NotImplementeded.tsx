import React from "react"
import Text from "../form/Text"
import { NotImplementededContainer } from "./style"

const NotImplementeded = () => {
  return (
    <NotImplementededContainer>
      <Text size={1.05} weight={500} justify={"justify"}>
        Dear user,
      </Text>
      <Text size={1.05} weight={400} justify={"justify"}>
        We regret to inform you that the Pinterest page you are currently
        accessing has not been fully developed as the intention was to simulate
        only the main features of the Pinterest platform. We apologize for any
        inconvenience this may have caused.
      </Text>
      <Text size={1.05} weight={400} justify={"justify"}>
        Thank you for your understanding.
      </Text>
      <Text size={1.05} weight={400} justify={"justify"}>
        Best regards,
        <br />
        JM.
      </Text>
    </NotImplementededContainer>
  )
}

export default NotImplementeded
