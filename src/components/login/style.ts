import styled from "styled-components"

const Container = styled.div`
  max-width: 30.25em;
  width: 100%;
  background-color: var(--g-color-white);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  overflow: hidden;
  gap: 0.3rem;
  z-index: 10;

  @media (min-width: 768px) {
    position: absolute;
    top: 1vh;
    left: calc(50% - 15em);
  }
`

const Icon = styled.img`
  width: 4rem;

  @media (min-width: 768px) {
    width: 2.4rem;
  }
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
  margin: 0 auto;
  align-items: center;
  text-align: center;
  width: 80%;

  @media (min-width: 768px) {
    width: 70%;
  }
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
  background-color: var(--g-colorGray100);
  width: 100%;
  height: 3.2rem;
  display: grid;
  place-items: center;
`

export { Container, Section, SectionInput, Footer, Icon, Link }
