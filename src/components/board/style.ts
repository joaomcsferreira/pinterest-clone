import styled from "styled-components"

interface BoardItemImgProps {
  src: string
}

interface TextProps {
  fontSize: number
  fontWeight: number
}

const Select = styled.div`
  padding: 0 1rem;
  background-color: var(--g-colorGray25);
  display: flex;
  place-items: center;
  min-width: 10rem;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
`

const SelectOptions = styled.div`
  min-width: 13rem;
  position: absolute;
  top: 3rem;
  right: 3rem;
  background-color: var(--g-color-white);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 0 5px 2px var(--g-colorTransparentGray20);
  border-radius: 0.8rem;
  padding: 0.05rem;
  text-align: center;
  overflow: hidden;
`

const SelectOptionsItems = styled.div`
  max-height: 17rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  gap: 0.5rem;
  z-index: 6;
`

const SelectOption = styled.p`
  padding: 0.4rem 1rem;
  text-align: center;
  display: flex;
  place-items: center;
  border-radius: 0.7rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: var(--g-colorGray150);
  }
`

const BoardsListContainer = styled.div`
  width: 95%;
  margin: 0.2rem auto;
  padding: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`

const BoardItemContainer = styled.div`
  width: 16rem;
  height: 14.75rem;
  display: grid;
  grid-template-rows: 2fr 1fr;
  padding: 0.25rem;
  border-radius: 10px;
  overflow: hidden;
  gap: 1rem;
  cursor: pointer;
`

const BoardItemName = styled.h3`
  text-transform: capitalize;
  font-weight: 700;
`

const BoardItemImgGroup = styled.div`
  display: grid;
  border-radius: 10px;
  overflow: hidden;

  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.05rem;

  & > :nth-child(1) {
    grid-row: span 2;
  }
`

const BoardItemImg = styled.div<BoardItemImgProps>`
  background: ${({ src }) => `url(${src})` || ""} var(--g-colorGray100);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`

const PinsBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

const BoardTitle = styled.h2`
  text-transform: capitalize;
  font-size: 3rem;
  font-weight: 500;
`

const PinsBoardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BoardCreateButtonContainer = styled.div`
  padding: 0.8rem 1rem;
  border-top: 1px solid var(--g-colorGray150);
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 6;

  &:hover {
    background-color: var(--g-colorGray150);
    cursor: pointer;
  }
`

const BoardIcon = styled.img`
  height: 2rem;
  width: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: var(--g-color-red);
`

const BoardCreateContainer = styled.div`
  width: 40rem;
  height: 20rem;
  background-color: var(--g-color-white);
  padding: 1rem 0 0 0;
  position: fixed;
  z-index: 7;
  top: calc(50% - 10rem);
  left: calc(50% - 20rem);
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  grid-template-rows: 3fr 1fr;
`

const BoardCreateSection = styled.div`
  display: grid;
  gap: 0.5rem;
  justify-content: stretch;
  padding: 1rem;
`

const BoardCreateActions = styled.div`
  width: 100%;
  height: 7rem;
  box-shadow: 0 0 5px 2px var(-g-colorTransparentGray20);
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 2rem;
  position: relative;
`

const ErrorContainer = styled.div`
  position: absolute;
  left: 0;
  width: 70%;

  & > :nth-child(1) {
    font-size: 1rem;
    font-weight: 500;
  }
`

export {
  Select,
  SelectOptions,
  SelectOptionsItems,
  SelectOption,
  BoardsListContainer,
  BoardItemName,
  BoardItemContainer,
  BoardItemImgGroup,
  BoardItemImg,
  PinsBoardContainer,
  BoardTitle,
  PinsBoardSection,
  ErrorContainer,
  BoardCreateButtonContainer,
  BoardIcon,
  BoardCreateContainer,
  BoardCreateSection,
  BoardCreateActions,
}
