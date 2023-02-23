import styled from "styled-components"

interface TextProps {
  fontSize: number
  fontWeight: number
}

const NotImplementededContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: justify;
  text-justify: inter-word;
`

export { NotImplementededContainer, Text }
