import React from "react"
import Button from "../form/Button"
import Input from "../form/Input"
import useForm from "../../hooks/useForm"
import FillMode from "../helper/FillMode"
import Loading from "../helper/Loading"

import { useUserContext } from "../../UserContext"
import { Container, Icon, Section, SectionInput, Footer, Link } from "./style"

import logo from "../../assets/svg/logo.svg"
import Error from "../helper/Error"
import Title from "../form/Title"
import Text from "../form/Text"

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
        <Title size={2}>Welcome to Pinterest</Title>
        <Text>Find new ideas to try</Text>
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
          <Text size={0.9}>Age</Text>
          <Input
            radius={1.275}
            type="number"
            blank
            placeholder="Age (Optional)"
            {...age}
          />
        </SectionInput>
        <Button full onClick={() => handleSubmit()} color="--color-button-red">
          Continue
        </Button>
        <Text size={0.9} weight={700}>
          OR
        </Text>
        <Button
          full
          onClick={() => console.log("entrando")}
          color="--color-button-blue"
        >
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
          <Text weight={600}>Create a free business account</Text>
        </Link>
      </Footer>

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

export default Signup
