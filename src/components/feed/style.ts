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
  width: 236px;
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

export { FeedContainer, ImgContainer, Img }
