import React from "react"
import { useDropzone } from "react-dropzone"

import {
  DragArea,
  DragAreaAlert,
  DragAreaInput,
  DragAreaLogo,
  DragAreaMessage,
  DragzoneContainer,
} from "./style"

import arrow from "../../assets/svg/arrowUp.svg"
import alert from "../../assets/svg/alert.svg"

import { imageProps } from "../pin/PinBuilder"

interface DrapzoneProps {
  setPin: React.Dispatch<React.SetStateAction<imageProps | null>>
  pinBlank: boolean
}

const Drapzone = ({ setPin, pinBlank }: DrapzoneProps) => {
  const [url, setUrl] = React.useState("")

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0].type.match(/image\/(.+)/)) {
        const preview = URL.createObjectURL(acceptedFiles[0])
        const raw = acceptedFiles[0]

        setPin({ preview, raw })
        setUrl(preview)
      }
    },
  })

  return (
    <DragzoneContainer pinBlank={pinBlank}>
      <DragArea {...getRootProps()} src={url} pinBlank={pinBlank}>
        <DragAreaInput {...getInputProps()} />
        {!url && (
          <>
            <DragAreaLogo src={pinBlank ? alert : arrow} />
            <DragAreaMessage>
              {pinBlank
                ? "An image is required to create a Pin."
                : "Drag on drop or click to upload"}
            </DragAreaMessage>
            <DragAreaAlert>
              Recommendation: Use high-quality .jpg images less than 20MB
            </DragAreaAlert>
          </>
        )}
      </DragArea>
    </DragzoneContainer>
  )
}

export default Drapzone
