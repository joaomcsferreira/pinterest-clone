import styled from "styled-components"

interface TextProps {
  fontSize: number
  fontWeight: number
  color?: string
}

const NotImplementededContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => (color ? color : "var(--color-black)")};
  text-align: justify;
  text-justify: inter-word;
`

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30rem;
  gap: 1rem;
`

const NotFoundIcon = styled.p`
  height: 15rem;
  width: 15rem;
  border: 1rem solid var(--color-red);
  color: var(--color-red);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
`

export { NotImplementededContainer, Text, NotFoundContainer, NotFoundIcon }
