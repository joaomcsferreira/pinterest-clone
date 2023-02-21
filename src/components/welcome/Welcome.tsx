import React from "react"
import {
  ContainerAllPages,
  ArrowDown,
  Container,
  ContainerColumn,
  ContainerFirstPage,
  NavCircle,
  NavCircleItem,
  SectionButton,
  SectionButtonText,
  SectionPage,
  SectionParagraph,
  SectionPhoto,
  SecondSectionPhotos,
  ThirdSectionPhotos,
  ThirdSectionPhoto,
  FourthSectionPhotos,
  SectionTitle,
  Subtitle,
  Title,
  SecondSectionPhotosSearch,
  SectionText,
  ThirdSectionPhotoText,
  Footer,
  FooterNav,
  FooterNavLink,
} from "./style"

import { Gallery, GalleryAnimated } from "./Gallery"

import arrow from "../../assets/svg/arrowDown.svg"
import magnifier from "../../assets/svg/magnifier.svg"

import FillMode from "../util/FillMode"
import Signup from "../../components/login/Signup"

const Welcome = () => {
  const [active, setActive] = React.useState(0)
  const subtitles = [
    { id: 0, message: "summer outfit idea", color: "#0076D3" },
    { id: 1, message: "activity for kids", color: "#618C7B" },
    { id: 2, message: "idea for special dinner", color: "#C28B00" },
    { id: 3, message: "Do it yourself project", color: "#407A57" },
  ]

  const photos = [
    {
      urls: [
        { url: "/images/center-77497603.png", alt: "" },
        { url: "/images/topRight-d0230035.png", alt: "" },
        { url: "/images/left-511a9304.png", alt: "" },
        { url: "/images/right-88044782.png", alt: "" },
      ],
    },
    {
      urls: [
        {
          url: "/images/future-home-vibes-55a673b9.png",
          alt: "Fern future home vibes",
        },
        {
          url: "/images/scandinavian-bedroom-917ad89c.png",
          alt: "My Scandinavian bedroom",
        },
        {
          url: "/images/deck-of-dreams-fb527bf1.png",
          alt: "The deck of my dreams",
        },
        {
          url: "/images/serve-my-drinks-263547ea.png",
          alt: "Serve my drinks in style",
        },
        {
          url: "/images/bathroom-upgrade-48ebb8fc.png",
          alt: "Our bathroom upgrade",
        },
      ],
    },
    {
      urls: [
        { url: "/images/shop-bd0c8a04.png", alt: "" },
        { url: "/images/creator-pin-img-491ebb56.png", alt: "" },
        { url: "/images/creator-avatar-d7a05622.png", alt: "" },
      ],
    },
  ]

  React.useEffect(() => {
    const updateActive = () => {
      setActive((active) => (active < 3 ? active + 1 : 0))
    }

    const interval = setInterval(updateActive, 4000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <ContainerAllPages>
      <ContainerFirstPage>
        <Title>Get your next</Title>

        <Subtitle color={subtitles[active].color}>
          {subtitles[active].message}
        </Subtitle>

        <NavCircle>
          {subtitles.map((subtitle) => (
            <NavCircleItem
              onClick={() => {
                setActive(subtitle.id)
              }}
              key={subtitle.id}
              color={
                subtitle.id === active
                  ? subtitle.color
                  : `var(--color-gray-light)`
              }
            />
          ))}
        </NavCircle>

        <ArrowDown href="#second" color={subtitles[active].color} src={arrow} />

        <GalleryAnimated />
      </ContainerFirstPage>

      {/* second page */}
      <Container style={{ backgroundColor: "var(--color-yellow)" }} id="second">
        <ContainerColumn>
          <SecondSectionPhotos>
            {photos[0].urls.map((photo, index) => (
              <SectionPhoto key={index} src={photo.url} alt={photo.alt} />
            ))}
          </SecondSectionPhotos>

          <SecondSectionPhotosSearch>
            <img src={magnifier} alt="" />
            <SectionText>easy chicken dinner</SectionText>
          </SecondSectionPhotosSearch>
        </ContainerColumn>

        <SectionPage color="var(--color-pink)">
          <SectionTitle>Search for an idea</SectionTitle>
          <SectionParagraph>
            What do you want to try next? Think of something you're into — like
            “easy chicken dinner” — and see what you find.
          </SectionParagraph>
          <SectionButton>
            <SectionButtonText>Explore</SectionButtonText>
          </SectionButton>
        </SectionPage>
      </Container>

      {/* third page */}
      <Container style={{ backgroundColor: "var(--color-mint)" }}>
        <SectionPage color="var(--color-green)">
          <SectionTitle>Save ideas you like</SectionTitle>
          <SectionParagraph>
            Collect your favorites so you can get back to them later.
          </SectionParagraph>
          <SectionButton>
            <SectionButtonText>Explore</SectionButtonText>
          </SectionButton>
        </SectionPage>

        <ContainerColumn>
          <ThirdSectionPhotos>
            {photos[1].urls.map((photo, index) => (
              <ThirdSectionPhoto key={index}>
                <SectionPhoto src={photo.url} alt={photo.alt} />
                <ThirdSectionPhotoText>{photo.alt}</ThirdSectionPhotoText>
              </ThirdSectionPhoto>
            ))}
          </ThirdSectionPhotos>
        </ContainerColumn>
      </Container>

      {/* fourth page */}
      <Container style={{ backgroundColor: "var(--color-light-pink)" }}>
        <ContainerColumn>
          <FourthSectionPhotos>
            {photos[2].urls.map((photo, index) => (
              <SectionPhoto key={index} src={photo.url} alt={photo.alt} />
            ))}
          </FourthSectionPhotos>
        </ContainerColumn>
        <SectionPage color="var(--color-orange)">
          <SectionTitle>See it, make it, try it, do it</SectionTitle>
          <SectionParagraph>
            The best part of Pinterest is discovering new things and ideas from
            people around the world.
          </SectionParagraph>
          <SectionButton>
            <SectionButtonText>Explore</SectionButtonText>
          </SectionButton>
        </SectionPage>
      </Container>

      {/* fifth page */}
      <Container>
        <Gallery />
        <FillMode color="rgba(0,0,0,0.6)" setModal={() => {}} />
        <SectionPage color="var(--color-white)">
          <SectionTitle style={{ zIndex: "11" }}>
            Sign up to get your ideias
          </SectionTitle>
        </SectionPage>
        <ContainerColumn>
          <Signup setModal={() => {}} />
        </ContainerColumn>
        <Footer>
          <FooterNav>
            <FooterNavLink>Terms of Service</FooterNavLink>
            <FooterNavLink>Privacy Policy</FooterNavLink>
            <FooterNavLink>Help</FooterNavLink>
            <FooterNavLink>Iphone App</FooterNavLink>
            <FooterNavLink>Android App</FooterNavLink>
            <FooterNavLink>Users</FooterNavLink>
            <FooterNavLink>Collections</FooterNavLink>
            <FooterNavLink>Today</FooterNavLink>
            <FooterNavLink>Explore</FooterNavLink>
            <FooterNavLink>Watch</FooterNavLink>
          </FooterNav>
        </Footer>
      </Container>
    </ContainerAllPages>
  )
}

export default Welcome
