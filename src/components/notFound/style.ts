import styled from "styled-components"

const NotImplementededContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 5rem auto;
  flex-direction: column;
  gap: 1rem;
  grid-column: 1 / span 2;
  padding: 1rem;

  @media (min-width: 768px) {
    grid-column: 2;
  }
`

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30rem;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
`

const NotFoundIcon = styled.p`
  height: 15rem;
  width: 15rem;
  border: 1rem solid var(--g-color-danger);
  color: var(--g-color-danger);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
`

export { NotImplementededContainer, NotFoundContainer, NotFoundIcon }
