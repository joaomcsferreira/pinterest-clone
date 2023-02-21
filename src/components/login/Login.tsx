import React from "react"
import Button from "../form/Button"
import Input from "../form/Input"
import useForm from "../../hooks/useForm"
import FillMode from "../util/FillMode"
import Loading from "../util/Loading"

import { Container, Text, Icon, Section, SectionInput, Link } from "./style"
import { useUserContext } from "../../services/UserContext"

import logo from "../../assets/svg/logo.svg"
import Error from "../util/Error"

interface LoginProps {
  setModal: (value: string) => void
}

const Login = ({ setModal }: LoginProps) => {
  const email = useForm("email")
  const password = useForm()

  const { login, error, loading } = useUserContext()

  function handleSubmit() {
    login(email.value, password.value)
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
          <Link>
            <Text bold="500" size="0.9rem">
              Forgot your password?
            </Text>
          </Link>
        </SectionInput>
        <Button onClick={() => handleSubmit()} color="red">
          Log in
        </Button>
        <Text style={{ margin: ".5rem 0" }} bold="700" size="0.95rem">
          OR
        </Text>
        <Button onClick={() => {}} color="blue">
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
          Not on Pinterest?{" "}
          <Link
            onClick={() => {
              setModal("signup")
            }}
          >
            Sign up
          </Link>
        </Text>
      </Section>

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

export default Login
