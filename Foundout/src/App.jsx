import { BrowserRouter, Routes, Route }
from "react-router-dom"

import { useContext } from "react"

import { ThemeContext }
from "./context/ThemeContext"

import Home from "./pages/Home"
import About from "./pages/About"
import Favorites from "./pages/Favorites"
import Details from "./pages/Details"

import Navbar from "./components/Navbar"

function App() {

  const { darkMode } =
    useContext(ThemeContext)

  return (

    <div

      className={
        darkMode
          ? "bg-dark text-light min-vh-100"
          : "bg-light text-dark min-vh-100"
      }

    >

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

          <Route
            path="/details/:id"
            element={<Details />}
          />

        </Routes>

      </BrowserRouter>

    </div>

  )
}

export default App