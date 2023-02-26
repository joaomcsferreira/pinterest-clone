import styled from "styled-components"

const Container = styled.div`
  width: 30.25em;
  background-color: var(--g-color-white);
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
  background-color: var(--g-colorGray100);
  width: 30.25em;
  height: 3.2rem;
  position: relative;
  bottom: -20px;
  left: -10px;
  display: grid;
  place-items: center;
`

export { Container, Section, SectionInput, Footer, Icon, Link }
