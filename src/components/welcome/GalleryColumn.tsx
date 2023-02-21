import React from "react"
import {
  GalleryColumnContainer,
  GalleryColumnContainerAnimated,
  GalleryImg,
} from "./style"

interface GalleryColumnProps {
  id: number
  urls: string[]
  marginTop: string
}

const GalleryColumn = ({ id, urls, marginTop }: GalleryColumnProps) => {
  return (
    <GalleryColumnContainer
      delay={`${(id * 2) / 10}s`}
      marginTop={marginTop}
      key={id}
    >
      {urls.map((url, index) => (
        <GalleryImg key={index} src={url} alt="" />
      ))}
    </GalleryColumnContainer>
  )
}

const GalleryColumnAnimated = ({ id, urls, marginTop }: GalleryColumnProps) => {
  return (
    <GalleryColumnContainerAnimated
      delay={`${(id * 2) / 10}s`}
      marginTop={marginTop}
      key={id}
    >
      {urls.map((url, index) => (
        <GalleryImg key={index} src={url} alt="" />
      ))}
    </GalleryColumnContainerAnimated>
  )
}

export { GalleryColumn, GalleryColumnAnimated }
