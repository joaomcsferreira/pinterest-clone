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

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pin-builder" element={<ProtectedRoute />}>
            <Route path="/pin-builder" element={<PinBuilder />} />
          </Route>
          <Route path="/pin/:id" element={<ProtectedRoute />}>
            <Route path="/pin/:id" element={<PinViewer />} />
          </Route>
          <Route path="/:username" element={<ProtectedRoute />}>
            <Route path="/:username" element={<UserProfile />} />
          </Route>
          <Route path="/:username/:board" element={<ProtectedRoute />}>
            <Route path="/:username/:board" element={<BoardPins />} />
          </Route>
          <Route path="/settings/edit-profile" element={<ProtectedRoute />}>
            <Route
              path="/settings/edit-profile"
              element={<UserEditProfile />}
            />
          </Route>
          <Route path="notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
