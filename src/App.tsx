import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { UserProvider } from "./services/UserContext"
import Header from "./components/header/Header"
import Home from "./components/feed/Home"
import PinBuilder from "./components/pin/PinBuilder"
import PinViewer from "./components/pin/PinViewer"
import UserProfile from "./components/user/UserProfile"
import BoardPins from "./components/board/BoardPins"
import UserEditProfile from "./components/user/UserEditProfile"

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/pin-builder" element={<PinBuilder />} />
          <Route path="/pin/:id" element={<PinViewer />} />
          <Route path="/:username" element={<UserProfile />} />
          <Route path="/:username/:board" element={<BoardPins />} />
          <Route path="/settings/edit-profile" element={<UserEditProfile />} />
        </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
