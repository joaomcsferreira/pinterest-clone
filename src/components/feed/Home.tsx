import React from "react"
import { useUserContext } from "../../UserContext"
import FillMode from "../helper/FillMode"
import Loading from "../helper/Loading"
import Welcome from "../welcome/Welcome"
import Feed from "./Feed"

const Home = () => {
  const { loading, logged } = useUserContext()

  if (loading)
    return (
      <FillMode color="--g-colorTransparentWhite60" setModal={() => {}}>
        <Loading />
      </FillMode>
    )
  if (logged) return <Feed type="all" />
  else return <Welcome />
}

export default Home
