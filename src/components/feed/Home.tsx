import React from "react"
import { useUserContext } from "../../UserContext"
import Welcome from "../welcome/Welcome"
import Feed from "./Feed"

const Home = () => {
  const { logged } = useUserContext()

  return <>{logged ? <Feed type="all" /> : <Welcome />}</>
}

export default Home
