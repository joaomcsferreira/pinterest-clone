import React from "react"

import { UserChangeAvatarContainer, UserText } from "./style"

import Button from "../form/Button"
import FillMode from "../util/FillMode"

import { imageProps } from "../pin/PinBuilder"

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
      <FillMode color="rgba(0,0,0,.8)" setModal={setModal} />
      <UserChangeAvatarContainer>
        <UserText fontSize={1.7} fontWeight={500}>
          Change your picture
        </UserText>
        <Button color="red">
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
