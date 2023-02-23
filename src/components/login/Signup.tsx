import React from "react"
import Button from "../form/Button"
import Input from "../form/Input"
import useForm from "../../hooks/useForm"
import FillMode from "../util/FillMode"
import Loading from "../util/Loading"

import { useUserContext } from "../../services/UserContext"
import {
  Container,
  Text,
  Icon,
  Section,
  SectionInput,
  Footer,
  Link,
} from "./style"

import logo from "../../assets/svg/logo.svg"
import Error from "../util/Error"

interface SignupProps {
  setModal: (value: string) => void
}

const Signup = ({ setModal }: SignupProps) => {
  const email = useForm("email")
  const password = useForm()
  const age = useForm()

  const { signUp, error, loading } = useUserContext()

  function handleSubmit() {
    signUp(email.value, password.value)
  }

  return (
    <Container>
      <Section>
        <Icon src={logo} />
      </Section>
      <Section>
        <Text bold="500" size="2rem">
          Welcome to Pinterest
        </Text>
        <Text bold="500" size="1rem">
          Find new ideas to try
        </Text>
        <>{error && <Error error={error} />}</>
      </Section>
      <Section>
        <SectionInput>
          <Text size="0.9rem">Email</Text>
          <Input radius={1.275} type="text" placeholder="Email" {...email} />
        </SectionInput>
        <SectionInput>
          <Text size="0.9rem">Password</Text>
          <Input
            radius={1.275}
            type="password"
            placeholder="Create a password"
            {...password}
          />
        </SectionInput>
        <SectionInput>
          <Text size="0.9rem">Age</Text>
          <Input
            radius={1.275}
            type="number"
            blank
            placeholder="Age (Optional)"
            {...age}
          />
        </SectionInput>
        <Button size="full" onClick={() => handleSubmit()} color="red">
          Continue
        </Button>
        <Text style={{ margin: ".5rem 0" }} bold="700" size="0.95rem">
          OR
        </Text>
        <Button
          size="full"
          onClick={() => console.log("entrando")}
          color="blue"
        >
          Continue with Facebook
        </Button>
      </Section>

      <Section>
        <Text bold="500" size="0.75rem">
          By continuing, you agree to Pinterest's
        </Text>
        <Text bold="500" size="0.75rem">
          Terms of Service and acknowledge you've read our
        </Text>
        <Text bold="500" size="0.75rem">
          Privacy Policy. Notice at collection
        </Text>
      </Section>
      <Section>
        <Text bold="700" size="0.8rem">
          Already a member?{" "}
          <Link
            onClick={() => {
              setModal("login")
            }}
          >
            Log in
          </Link>
        </Text>
      </Section>

      <Footer>
        <Link>
          <Text bold="600">Create a free business account</Text>
        </Link>
      </Footer>

      {loading && (
        <>
          <FillMode color="rgba(255,255,255,0.6)" setModal={() => {}}>
            <Loading />
          </FillMode>
        </>
      )}
    </Container>
  )
}

export default Signup
