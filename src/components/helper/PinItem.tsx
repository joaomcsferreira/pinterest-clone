import React from "react"
import { ImageContainer, ImageItem, ImageWrapper } from "./style"
import Text from "../form/Text"

interface PinItemProps {
  src: string
  title: string
}

const PinItem = ({ src, title }: PinItemProps) => {
  const [visible, setVisible] = React.useState(false)

  const handleLoad = () => {
    setVisible(true)
  }

  return (
    <ImageWrapper visible={visible}>
      <ImageContainer>
        <ImageItem onLoad={handleLoad} src={src} />
      </ImageContainer>
      <Text weight={500} size={0.9} capitalize>
        {title}
      </Text>
    </ImageWrapper>
  )
}

export default PinItem
