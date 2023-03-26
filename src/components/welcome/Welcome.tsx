import React from "react"
import {
  ContainerAllPages,
  ArrowDown,
  Container,
  ContainerColumn,
  ContainerFirstPage,
  NavCircle,
  NavCircleItem,
  SectionPage,
  SectionPhoto,
  SecondSectionPhotos,
  ThirdSectionPhotos,
  ThirdSectionPhoto,
  FourthSectionPhotos,
  SecondSectionPhotosSearch,
  ThirdSectionPhotoText,
  Footer,
  FooterNav,
  FooterNavLink,
  ContainerMobile,
} from "./style"

import { GalleryAnimated } from "./Gallery"

import arrow from "../../assets/svg/arrowDown.svg"
import magnifier from "../../assets/svg/magnifier.svg"

import Signup from "../../components/login/Signup"
import Title from "../form/Title"
import Text from "../form/Text"
import Button from "../form/Button"
import Login from "../login/Login"

const Welcome = () => {
  const [modal, setModal] = React.useState("signup")
  const [active, setActive] = React.useState(0)
  const subtitles = [
    { id: 0, message: "summer outfit idea", color: "--g-color-celeste" },
    { id: 1, message: "activity for kids", color: "--g-color-olive" },
    { id: 2, message: "idea for special dinner", color: "--g-color-pumpkin" },
    { id: 3, message: "Do it yourself project", color: "--g-color-aspargo" },
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
    <>
      <ContainerAllPages>
        <ContainerFirstPage>
          <Title size={4}>Get your next</Title>

          <Title size={4} color={subtitles[active].color}>
            {subtitles[active].message}
          </Title>

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
                    : "--g-colorGray100Hovered"
                }
              />
            ))}
          </NavCircle>

          <ArrowDown
            href="#second"
            color={subtitles[active].color}
            src={arrow}
          />

          <GalleryAnimated />
        </ContainerFirstPage>

        {/* second page */}
        <Container color={"--g-color-yellow"} id="second">
          <ContainerColumn>
            <SecondSectionPhotos>
              {photos[0].urls.map((photo, index) => (
                <SectionPhoto key={index} src={photo.url} alt={photo.alt} />
              ))}
            </SecondSectionPhotos>

            <SecondSectionPhotosSearch>
              <img src={magnifier} alt="" />
              <Text size={1.3} weight={700}>
                easy chicken dinner
              </Text>
            </SecondSectionPhotosSearch>
          </ContainerColumn>

          <SectionPage>
            <Title size={4} weight={700} color={"--g-color-deepPink"}>
              Search for an idea
            </Title>
            <Text size={1.5} color={"--g-color-deepPink"}>
              What do you want to try next? Think of something you're into —
              like “easy chicken dinner” — and see what you find.
            </Text>
            <Button
              radius={2}
              color={"--color-button-deepPink"}
              padding={"0.8rem 1rem"}
            >
              Explore
            </Button>
          </SectionPage>
        </Container>

        {/* third page */}
        <Container color="--g-color-mint">
          <SectionPage>
            <Title size={4} weight={700} color={"--g-color-pine"}>
              Save ideas you like
            </Title>
            <Text size={1.5} color={"--g-color-pine"}>
              Collect your favorites so you can get back to them later.
            </Text>
            <Button
              radius={2}
              color={"--color-button-pine"}
              padding={"0.8rem 1rem"}
            >
              Explore
            </Button>
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
        <Container color="--g-color-pink">
          <ContainerColumn>
            <FourthSectionPhotos>
              {photos[2].urls.map((photo, index) => (
                <SectionPhoto key={index} src={photo.url} alt={photo.alt} />
              ))}
            </FourthSectionPhotos>
          </ContainerColumn>

          <SectionPage>
            <Title size={4} weight={700} color={"--g-color-coral"}>
              See it, make it, try it, do it
            </Title>
            <Text size={1.5} color={"--g-color-coral"}>
              The best part of Pinterest is discovering new things and ideas
              from people around the world.
            </Text>
            <Button
              radius={2}
              color={"--color-button-coral"}
              padding={"0.8rem 1rem"}
            >
              Explore
            </Button>
          </SectionPage>
        </Container>

        {/* fifth page */}
        <Container
          style={{ background: "url(/images/background-set-photos.PNG)" }}
          color=""
        >
          <SectionPage color="--g-color-white">
            <Title size={4} weight={700} color={"--g-color-white"}>
              Sign up to get your ideias
            </Title>
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
      <ContainerMobile
        style={{
          background: "url(/images/background-set-photos.PNG)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {modal === "signup" ? (
          <Signup setModal={setModal} />
        ) : (
          <Login setModal={setModal} />
        )}
      </ContainerMobile>
    </>
  )
}

export default Welcome
