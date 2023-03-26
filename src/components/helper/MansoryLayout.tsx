import React from "react"

import { MansoryContainer } from "./style"

import Text from "../form/Text"
import { useWindowSize } from "../../hooks/useWindowSize"

interface MansoryLayoutProps {
  gap: number
  children?: React.ReactNode[] | React.ReactNode
}

const MansoryLayout = ({ gap, children }: MansoryLayoutProps) => {
  // const result: Array<React.ReactNode> = []
  const [result, setResult] = React.useState<Array<React.ReactNode>>([])

  const [columnCount, setColumnCount] = React.useState(5)

  const { width } = useWindowSize()

  React.useEffect(() => {
    calculateColumnsSize()

    if (width && width > 1300) setColumnCount(5)
    if (width && width < 1100) setColumnCount(4)
    if (width && width < 1000) setColumnCount(3)
    if (width && width < 800) setColumnCount(2)
  }, [width, columnCount, children])

  const calculateColumnsSize = () => {
    if (Array.isArray(children) && children.length > 0) {
      const columns: Array<Array<React.ReactNode>> = Array.from(
        { length: columnCount },
        () => []
      )

      let index = 0
      children.forEach((value, i) => {
        columns[index].push(
          <div key={i} style={{ marginBottom: `${gap}px` }}>
            {value}
          </div>
        )
        index = (index + 1) % columnCount
      })

      const auxResult: Array<React.ReactNode> = []
      for (let index = 0; index < columnCount; index++) {
        auxResult.push(
          <div
            key={index}
            style={{
              marginLeft: `${index > 0 ? gap : 0}px`,
              flex: 1,
            }}
          >
            {columns[index]}
          </div>
        )
      }

      setResult(auxResult)
    }
  }

  return (
    <>
      {result.length ? <MansoryContainer>{result}</MansoryContainer> : ""}
      <Text justify="center" padding="2rem 0 4rem 0" color="--g-colorGray175">
        {result.length ? "There are no more posts." : "There are no posts yet."}
      </Text>
    </>
  )
}

export default MansoryLayout
