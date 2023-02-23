import styled from "styled-components"

interface ButtonProps {
  color?: string
  invisible?: boolean
  active?: boolean
  radius?: number
  size?: string
}

interface InputContainerProps {
  color: string
  radius: number
}

const ButtonContainer = styled.button<ButtonProps>`
  display: grid;
  align-items: center;
  border: none;
  padding: ${({ size }) => (size === "full" ? "0.8rem" : "0.5rem")};
  border-radius: ${({ radius }) => (radius ? `${radius}rem` : "1.875rem")};
  font-weight: 700;
  width: ${({ size }) => size === "full" && "100%"};
  height: fit-content;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  background-color: ${({ invisible, color }) =>
    color ? `var(--color-${color}-button)` : `transparent`};
  color: ${({ invisible }) =>
    invisible ? `var(--color-black)` : `var(--color-white)`};

  &:after {
    content: "";
    width: 90%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 5%;
    border-radius: 3px;
    background-color: ${({ active }) => (active ? "var(--color-black)" : "")};
  }

  &:hover {
    background-color: ${({ color }) =>
      color
        ? `var(--color-${color}-button-second)`
        : `var(--color-gray-button-second)`};
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

  &:hover {
    border: 2px solid var(--color-gray);
  }
`

export { ButtonContainer, ButtonInvisible, InputContainer }
