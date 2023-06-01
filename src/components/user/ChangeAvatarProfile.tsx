import React from "react"

import { UserChangeAvatarContainer } from "./style"

import Button from "../form/Button"
import FillMode from "../helper/FillMode"

import { imageProps } from "../pin/PinBuilder"
import Text from "../form/Text"

interface ChangeAvatarProfileProps {
  setImage: React.Dispatch<React.SetStateAction<imageProps | null>>
  setModal: React.Dispatch<React.SetStateAction<string>>
}

const ChangeAvatarProfile = ({
  setImage,
  setModal,
}: ChangeAvatarProfileProps) => {
  const handleImageChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      setImage({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0],
      })

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
