import styled from "styled-components"

interface BoardItemImgProps {
  src: string
}

const Select = styled.div`
  padding: 0 1rem;
  background-color: var(--color-gray-third);
  display: flex;
  place-items: center;
  min-width: 10rem;
  cursor: pointer;
  position: relative;
  border-radius: 10px 0 0 10px;
`

const SelectOptions = styled.div`
  min-width: 14.5rem;
  position: absolute;
  top: 3rem;
  right: 3rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 0 5px 2px rgba(130, 130, 130, 0.2);
  border-radius: 0.8rem;
  padding: 0.3rem;
  text-align: center;
`

const SelectOptionsItems = styled.div`
  max-height: 17rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
    background-color: var(--color-gray-second);
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
  background: ${({ src }) => `url(${src})` || ""} var(--color-gray-fifth);
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
}
