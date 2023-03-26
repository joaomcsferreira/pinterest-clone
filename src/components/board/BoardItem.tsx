import React from "react"

import { BoardItemContainer, BoardItemImg, BoardItemImgGroup } from "./style"

import PinService from "../../services/PinService"

import Text from "../form/Text"

interface BoardItemProps {
  username: string
  name: string
}

const BoardItem = ({ username, name }: BoardItemProps) => {
  const { pins, getPins } = PinService()

  React.useEffect(() => {
    getPins({ type: "board", user: username, board: name, total: 3 })
  }, [])

  return (
    <>
      {pins && (
        <BoardItemContainer>
          <BoardItemImgGroup>
            {pins.map((pin) => (
              <BoardItemImg
                key={pin._id}
                src={`${process.env.REACT_APP_BASE_URL}${pin.src}`}
              />
            ))}
            {pins.length < 3 &&
              Array.apply(0, Array(3 - pins.length)).map((div, index) => (
                <BoardItemImg src="" key={index}></BoardItemImg>
              ))}
          </BoardItemImgGroup>
          <Text weight={500} capitalize>
            {name}
          </Text>
        </BoardItemContainer>
      )}
    </>
  )
}

export default BoardItem
