import React from "react"

import { UserChangeAvatarContainer } from "./style"

import Button from "../form/Button"
import FillMode from "../helper/FillMode"

import { imageProps } from "../pin/PinBuilder"
import Text from "../form/Text"

interface ChangeAvatarProfileProps {
  setImage: React.Dispatch<React.SetStateAction<imageProps | null>>
  setImage64: React.Dispatch<React.SetStateAction<string>>
  setModal: React.Dispatch<React.SetStateAction<string>>
}

const ChangeAvatarProfile = ({
  setImage,
  setImage64,
  setModal,
}: ChangeAvatarProfileProps) => {
  const convertToBase64 = (pin: File | undefined) => {
    if (pin) {
      const reader = new FileReader()

      reader.readAsDataURL(pin)

      reader.onload = () => {
        setImage64(`${reader.result}`)
      }
    }
  }

  const handleImageChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      setImage({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0],
      })

      convertToBase64(target.files[0])

      setModal("")
    }
  }

  return (
    <>
      <FillMode color="--g-colorTransparentBlack80" setModal={setModal} />
      <UserChangeAvatarContainer>
        <Text size={1.7} weight={500}>
          Change your picture
        </Text>
        <Button color="--color-button-red">
          Choose photo
          <input
            type="file"
            style={{
              opacity: 0,
              height: "50px",
              width: "120px",
              position: "absolute",
              cursor: "pointer",
            }}
            onChange={handleImageChange}
          />
        </Button>
      </UserChangeAvatarContainer>
    </>
  )
}

export default ChangeAvatarProfile
