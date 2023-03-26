import styled from "styled-components"

const FeedContainer = styled.div`
  width: 95%;
  margin: 0.2rem auto;
  padding: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`

const ImgContainer = styled.div`
  position: relative;
  border-radius: 1.1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  cursor: zoom-in;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover:after {
    opacity: 1;
  }
`

const Img = styled.img`
  object-fit: cover;
`

const MenuMobile = styled.div`
  background-color: var(--g-color-white);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 15%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 800px) {
    display: none;
  }
`

const MobileIcon = styled.div`
  width: 1.3rem;
`

const MenuMobileModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  position: fixed;
  padding: 0.5rem;
  bottom: 3rem;
  right: calc(15% - 10%);
  border-radius: 10px;
  gap: 0.5rem;
  background-color: var(--g-color-white);
  box-shadow: 0 0 2px 2px var(--g-colorGray100);
  z-index: 6;

  @media (min-width: 768px) {
    display: none;
  }
`

const MenuMobileModalItem = styled.div`
  border-radius: 10px;
  font-weight: 500;
  padding: 0.4rem 0.4rem;
  cursor: pointer;

  &:hover {
    background-color: var(--g-colorGray100);
  }
`

export {
  FeedContainer,
  ImgContainer,
  Img,
  MenuMobile,
  MenuMobileModal,
  MenuMobileModalItem,
  MobileIcon,
}
