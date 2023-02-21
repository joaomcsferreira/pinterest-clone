import styled from "styled-components"

interface TextProps {
  size?: string
  bold?: string
}

const Container = styled.div`
  width: 30.25em;
  background-color: var(--color-white);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  overflow: hidden;
  top: 1vh;
  left: calc(50% - 15em);
  position: absolute;
  gap: 0.3rem;
  z-index: 10;
`

const Text = styled.p<TextProps>`
  font-size: ${({ size }) => (size ? size : "1rem")};
  font-weight: ${({ bold }) => (bold ? bold : "normal")};
  color: var(--color-black);
`

const Icon = styled.img`
  width: 2.4rem;
`

const Link = styled.a`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  align-items: center;
  text-align: center;
`

const SectionInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  font-weight: normal;
  margin-bottom: 0.4rem;

  & > :first-child {
    margin: 0 0 0.3rem 0.7rem;
  }
`

const Footer = styled.div`
  background-color: var(--color-gray-fifth);
  width: 30.25em;
  height: 3.2rem;
  position: relative;
  bottom: -20px;
  left: -10px;
  display: grid;
  place-items: center;
`

export { Container, Section, SectionInput, Text, Footer, Icon, Link }
