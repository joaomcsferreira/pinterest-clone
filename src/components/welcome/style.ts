import styled, { keyframes } from "styled-components"

interface subtitleProps {
  color: string
}

interface ItemItemProps {
  color?: string
  src?: string
}

interface GalleryColumnContainerProps {
  marginTop: string
  delay?: string
}

interface SectionPageProps {
  color: string
}

const animeUp = keyframes`
  from {
    opacity: 0.3;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: initial;
  }
`

const animeUpDown = keyframes`
  to {
    transform: translateY(30px);
  }
`

const animeImg = keyframes`
  to {
    transform: translateY(-40px);
    opacity: 1;
  }
`

const ContainerAllPages = styled.div`
  & > :nth-child(n) {
    scroll-snap-align: start;
  }

  & > :nth-child(1) {
    scroll-snap-align: start;
    scroll-margin-top: 12rem;
  }
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const ContainerFirstPage = styled(Container)`
  height: calc(100vh - 5rem);
  flex-direction: column;

  &:before {
    content: "";
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, white 0%, transparent 100%);
    position: absolute;
    bottom: 60px;
    z-index: 4;
  }

  &:after {
    content: "Here's how it works";
    display: grid;
    place-items: center;
    width: 100%;
    height: 60px;
    font-weight: 500;
    background-color: var(--color-yellow);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

const Title = styled.h1`
  font-size: 4rem;
`

const Subtitle = styled.h1<subtitleProps>`
  font-size: 4rem;
  font-weight: 500;
  color: ${({ color }) => color};
  animation: ${animeUp} 0.6s forwards;
`

const NavCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  gap: 0.8rem;
`

const NavCircleItem = styled.button<ItemItemProps>`
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  cursor: pointer;
`

const ArrowDown = styled.a<ItemItemProps>`
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 60%;
  display: flex;
  place-items: center;
  border-radius: 50%;
  color: var(--color-white);
  background-color: ${({ color }) => color};
  padding: 0.5rem;
  cursor: pointer;
  z-index: 9;
  animation: ${animeUpDown} 0.6s ease-in alternate infinite;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    mask: url(${({ src }) => src}) center no-repeat;
    mask-size: contain;
    background-color: white;
  }
`

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 240px);
  justify-content: center;
  gap: 0.8rem;
  position: absolute;
  z-index: -1;
`

const GalleryColumnContainer = styled.figure<GalleryColumnContainerProps>`
  margin-top: ${({ marginTop }) => marginTop};
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const GalleryColumnContainerAnimated = styled(GalleryColumnContainer)`
  animation: ${animeImg} 2.2s ease-in infinite;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-direction: alternate;
  animation-delay: ${({ delay }) => delay};
  opacity: 0;
`

const GalleryImg = styled.img`
  object-fit: cover;
  border-radius: 1.1rem;
`

const ContainerColumn = styled.div`
  width: 50vw;
  height: 100%;
  position: relative;
`

const SectionPage = styled(ContainerColumn)<SectionPageProps>`
  color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`

const SectionTitle = styled.h1`
  font-size: 3.8rem;
  width: 85%;
`

const SectionParagraph = styled.p`
  max-width: 60%;
  font-size: 1.5rem;
`

const SectionButton = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 2rem;
  font-weight: bold;
  background-color: currentColor;
`

const SectionButtonText = styled.p`
  color: var(--color-white);
`

const SectionPhoto = styled.img`
  position: absolute;
`
const SectionText = styled.p`
  font-size: 100%;
`

const SecondSectionPhotos = styled(ContainerColumn)`
  & > :nth-child(1) {
    width: 45%;
    top: 20%;
    left: 30%;
    z-index: 5;
  }

  & > :nth-child(2) {
    width: 28%;
    top: 10%;
    left: 60%;
  }

  & > :nth-child(3) {
    width: 30%;
    top: 30%;
    left: 8%;
  }

  & > :nth-child(4) {
    width: 25%;
    top: 58%;
    left: 60%;
  }
`

const SecondSectionPhotosSearch = styled.div`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 4rem;
  position: absolute;
  top: 35%;
  left: 10%;
  z-index: 10;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  gap: 0.7rem;
  justify-content: center;
  align-items: center;
  color: var(--color-purple);
`

const ThirdSectionPhotos = styled(ContainerColumn)`
  position: relative;

  & > :nth-child(1) {
    width: 60%;
    font-size: 3rem;
    top: 6%;
    z-index: 999;
  }

  & > :nth-child(2) {
    width: 30%;
    font-size: 1.2rem;
    top: 6%;
    right: 0;
  }

  & > :nth-child(3) {
    width: 25%;
    font-size: 1.1rem;
    top: 38%;
    right: 10%;
  }

  & > :nth-child(4) {
    width: 30%;
    font-size: 1.2rem;
    top: 70%;
    right: 45%;
  }

  & > :nth-child(5) {
    width: 35%;
    font-size: 1.1rem;
    top: 66%;
    right: 3%;
  }
`

const ThirdSectionPhoto = styled.div`
  position: absolute;
  display: grid;
  top: 0;

  & > :nth-child(n) {
    grid-area: 1 / -1;
  }
`

const ThirdSectionPhotoText = styled(SectionText)`
  font-weight: 500;
  color: var(--color-white);
  z-index: 1;
  width: 75%;
  margin: 65% 0 0 10%;
`

const FourthSectionPhotos = styled(ContainerColumn)`
  position: absolute;
  display: grid;

  & > :nth-child(n) {
    grid-area: 1 / -1;
  }

  & > :nth-child(1) {
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  & > :nth-child(2) {
    width: 32%;
    top: 32%;
    left: 13%;
    border-radius: 20px;
  }

  & > :nth-child(3) {
    width: 15%;
    top: 75%;
    left: 8%;
  }
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.5rem;
  background-color: var(--color-white);
  z-index: 11;
`

const FooterNav = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`

const FooterNavLink = styled.li`
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export {
  ContainerAllPages,
  Container,
  ContainerFirstPage,
  Title,
  Subtitle,
  NavCircle,
  NavCircleItem,
  ArrowDown,
  GalleryContainer,
  GalleryColumnContainer,
  GalleryColumnContainerAnimated,
  GalleryImg,
  ContainerColumn,
  SectionPage,
  SectionTitle,
  SectionParagraph,
  SectionButton,
  SectionButtonText,
  SectionPhoto,
  SectionText,
  SecondSectionPhotos,
  SecondSectionPhotosSearch,
  ThirdSectionPhotos,
  ThirdSectionPhoto,
  ThirdSectionPhotoText,
  FourthSectionPhotos,
  Footer,
  FooterNav,
  FooterNavLink,
}
