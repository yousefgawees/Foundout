import {
  BrowserRouter,
  Routes,
  Route
}

from "react-router-dom"

import {
  useContext
}

from "react"

import Home from "./pages/Home"
import About from "./pages/About"
import Favorites from "./pages/Favorites"
import Details from "./pages/Details"
import Landing from "./pages/Landing"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import FavoritesProvider
from "./context/FavoritesContext"

import ThemeProvider, {
  ThemeContext
}

from "./context/ThemeContext"

import {
  ToastContainer
}

from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

function MainApp() {

  const { darkMode } =
    useContext(ThemeContext)

  return (

    <div

      style={{

        backgroundColor:
          darkMode
            ? "#020617"
            : "#f8fafc",

        minHeight: "100vh",

        color:
          darkMode
            ? "white"
            : "black",

        transition: "0.3s"

      }}

    >

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/explore"
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

      <Footer />

      <ToastContainer />

    </div>

  )
}

function App() {

  return (

    <ThemeProvider>

      <FavoritesProvider>

        <BrowserRouter>

          <MainApp />

        </BrowserRouter>

      </FavoritesProvider>

    </ThemeProvider>

  )
}

export default App