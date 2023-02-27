import React from "react"

import { MansoryContainer } from "./style"

import Text from "../form/Text"

interface MansoryLayoutProps {
  columnCount: number
  gap: number
  children?: React.ReactNode[] | React.ReactNode
}

const MansoryLayout = ({ columnCount, gap, children }: MansoryLayoutProps) => {
  const result: Array<React.ReactNode> = []

  if (Array.isArray(children) && children.length > 0) {
    const columns: Array<Array<React.ReactNode>> = Array.from(
      { length: columnCount },
      () => []
    )

    let index = 0
    children.forEach((value) => {
      columns[index].push(
        <div style={{ marginBottom: `${gap}px` }}>{value}</div>
      )
      index = (index + 1) % 5
    })

    for (let index = 0; index < columnCount; index++) {
      result.push(
        <div
          style={{
            marginLeft: `${index > 0 ? gap : 0}px`,
            flex: 1,
          }}
        >
          {columns[index]}
        </div>
      )
    }

    return (
      <>
        <MansoryContainer>{result}</MansoryContainer>
        <Text justify="center" padding="2rem 0 4rem 0" color="--g-colorGray175">
          There are no more posts.
        </Text>
      </>
    )
  }
  return (
    <Text justify="center" padding="4rem 0 4rem 0" color="--g-colorGray175">
      There are no posts yet.
    </Text>
  )
}

export default MansoryLayout
