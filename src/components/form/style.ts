import styled from "styled-components"

interface ButtonProps {
  color: string
  active?: boolean
  radius?: number
  full?: boolean
  padding?: string
  textDark?: boolean
}

interface InputContainerProps {
  color: string
  radius: number
  background?: string
}

interface TextProps {
  size?: number
  weight?: number
  color?: string
  capitalize?: boolean
  padding?: string
  animation?: string
  justify?: string
  isLink?: boolean
}

interface TitleProps {
  size?: number
  weight?: number
  color?: string
  capitalize?: boolean
  animation?: string
  justify?: string
}

const ButtonContainer = styled.button<ButtonProps>`
  padding: ${({ padding }) => (padding ? padding : "0.8rem")};
  border-radius: ${({ radius }) => (radius ? `${radius}rem` : "1.875rem")};
  width: ${({ full }) => full && "100%"};
  color: ${({ textDark }) =>
    textDark ? `var(--g-color-black)` : `var(--g-color-white)`};

  background-color: ${({ color }) => `var(${color})`};
  display: grid;
  align-items: center;
  border: none;
  font-weight: 600;
  height: fit-content;
  white-space: nowrap;
  position: relative;
  z-index: 5;
  cursor: pointer;

  &:after {
    content: "";
    width: 90%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 5%;
    border-radius: 3px;
    background-color: ${({ active }) => (active ? "var(--g-color-black)" : "")};
  }

  &:hover {
    background-color: ${({ color }) => `var(${color}50)`};
  }
`

const ButtonInvisible = styled(ButtonContainer)`
  background-color: transparent;

  &:hover {
    background-color: transparent;
  }
`

const InputContainer = styled.input<InputContainerProps>`
  padding: 0.875rem;
  border: 2px solid ${({ color }) => color};
  border-radius: ${({ radius }) => `${radius}rem`};
  display: block;
  width: 100%;
  background-color: ${({ background }) => `var(${background})`};

  &:hover {
    border: 2px solid var(--g-colorGray200);
  }
`

const TextContainer = styled.p<TextProps>`
  font-size: ${({ size }) => (size ? `${size}rem` : "1rem")};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  color: ${({ color }) => (color ? `var(${color})` : "var(--g-color-black)")};
  text-transform: ${({ capitalize }) => capitalize && "capitalize"};
  padding: ${({ padding }) => padding && padding};
  text-align: ${({ justify }) => justify && justify};
  text-justify: inter-word;

  cursor: ${({ isLink }) => (isLink ? "pointer" : "text")};

  &:hover {
    text-decoration: ${({ isLink }) => (isLink ? "underline" : "none")};
  }
`

const TitleContainer = styled.h2<TitleProps>`
  font-size: ${({ size }) => (size ? `${size}rem` : "3rem")};
  font-weight: ${({ weight }) => (weight ? weight : "500")};
  color: ${({ color }) => (color ? `var(${color})` : "var(--g-color-black)")};
  text-transform: ${({ capitalize }) => capitalize && "capitalize"};
  text-align: ${({ justify }) => justify && justify};
`

export {
  ButtonContainer,
  ButtonInvisible,
  InputContainer,
  TextContainer,
  TitleContainer,
}
