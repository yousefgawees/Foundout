import { Link } from "react-router-dom"

import { useContext } from "react"

import styled from "styled-components"

import { ThemeContext }
from "../context/ThemeContext"

function Navbar() {

  const { darkMode, toggleTheme } =
    useContext(ThemeContext)

  return (

    <nav
      className={
        darkMode
          ? "navbar navbar-dark bg-dark p-3"
          : "navbar navbar-light bg-light p-3"
      }
    >

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          Explore Egypt
        </Link>

        <div>

          <Link
            className="btn btn-primary me-2"
            to="/"
          >
            Home
          </Link>

          <Link
            className="btn btn-primary me-2"
            to="/about"
          >
            About
          </Link>

          <Link
            className="btn btn-primary me-2"
            to="/favorites"
          >
            Favorites
          </Link>

          <button
            className="btn btn-warning"
            onClick={toggleTheme}
          >

            🌙

          </button>

        </div>

      </div>

    </nav>

  )
}

export default Navbar