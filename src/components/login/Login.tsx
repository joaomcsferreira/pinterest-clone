import React from "react"
import Button from "../form/Button"
import Input from "../form/Input"
import useForm from "../../hooks/useForm"
import FillMode from "../helper/FillMode"
import Loading from "../helper/Loading"

import { Container, Icon, Section, SectionInput, Link } from "./style"
import { useUserContext } from "../../UserContext"

import logo from "../../assets/svg/logo.svg"
import Error from "../helper/Error"
import Title from "../form/Title"
import Text from "../form/Text"

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
    <Container style={{ padding: "20px 10px" }}>
      <Section>
        <Icon src={logo} />
      </Section>
      <Section>
        <Title size={2}>Welcome to Pinterest</Title>
        <>{error && <Error error={error} />}</>
      </Section>
      <Section>
        <SectionInput>
          <Text size={0.9}>Email</Text>
          <Input radius={1.275} type="text" placeholder="Email" {...email} />
        </SectionInput>
        <SectionInput>
          <Text size={0.9}>Password</Text>
          <Input
            radius={1.275}
            type="password"
            placeholder="Create a password"
            {...password}
          />
        </SectionInput>
        <SectionInput>
          <Link>
            <Text weight={500} size={0.9}>
              Forgot your password?
            </Text>
          </Link>
        </SectionInput>
        <Button full onClick={() => handleSubmit()} color="--color-button-red">
          Log in
        </Button>
        <Text weight={700} size={0.9}>
          OR
        </Text>
        <Button full onClick={() => {}} color="--color-button-blue">
          Continue with Facebook
        </Button>
      </Section>

      <Section>
        <Text weight={500} size={0.75}>
          By continuing, you agree to Pinterest's
        </Text>
        <Text weight={500} size={0.75}>
          Terms of Service and acknowledge you've read our
        </Text>
        <Text weight={500} size={0.75}>
          Privacy Policy. Notice at collection
        </Text>
      </Section>
      <Section>
        <Text weight={700} size={0.8}>
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
          <FillMode color="--g-colorTransparentWhite60">
            <Loading />
          </FillMode>
        </>
      )}
    </Container>
  )
}

export default Login
