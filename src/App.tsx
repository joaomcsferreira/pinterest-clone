import React from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import { UserProvider } from "./UserContext"
import Header from "./components/header/Header"
import Home from "./components/feed/Home"
import PinBuilder from "./components/pin/PinBuilder"
import PinViewer from "./components/pin/PinViewer"
import UserProfile from "./components/user/UserProfile"
import BoardPins from "./components/board/BoardPins"
import UserEditProfile from "./components/user/UserEditProfile"
import NotFound from "./components/notFound/NotFound"
import ProtectedRoute from "./components/helper/ProtectedRoute"
import NotImplementeded from "./components/notFound/NotImplementeded"

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/pin-builder" element={<PinBuilder />} />
            <Route path="/pin/:id" element={<PinViewer />} />
            <Route path="/:username" element={<UserProfile />} />
            <Route path="/:username/:board" element={<BoardPins />} />
            <Route
              path="/settings/edit-profile"
              element={<UserEditProfile />}
            />
            <Route path="/notImplemented" element={<NotImplementeded />} />
          </Route>
          <Route path="notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
