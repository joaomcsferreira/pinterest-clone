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
import { pinProps } from "../pin/PinBuilder"

interface DrapzoneProps {
  setPin: React.Dispatch<React.SetStateAction<pinProps | null>>
}

const Drapzone = ({ setPin }: DrapzoneProps) => {
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
    <DragzoneContainer>
      <DragArea {...getRootProps()} src={url}>
        <DragAreaInput {...getInputProps()} />
        {!url && (
          <>
            <DragAreaLogo src={arrow} />
            <DragAreaMessage>"Drag on drop or click to upload"</DragAreaMessage>
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
