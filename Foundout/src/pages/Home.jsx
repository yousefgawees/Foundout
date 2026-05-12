import { useState, useContext } from "react"

import "../styles/home.css"

import PlaceCard from "../components/PlaceCard"

import { ThemeContext }
from "../context/ThemeContext"

import GIZA from "../assets/GIZA.jpg"
import LUXOR from "../assets/LUXOR.jpg"
import MONTAZA from "../assets/MONTAZA.jpg"
import NILE from "../assets/NILE.jpg"
import QAITBAY from "../assets/QAITBAY.jpg"
import QAL3A from "../assets/QAL3A.jpg"
import SIWA from "../assets/SIWA.jpg"
import TOWER from "../assets/TOWER.jpg"

function Home() {

  const { darkMode } =
    useContext(ThemeContext)

  const [search, setSearch] = useState("")

  const [selectedCity, setSelectedCity] =
    useState("All")

  const places = [

    {
      id: 1,
      name: "Cairo Tower",
      description: "Amazing city view in Cairo",
      image: TOWER,
      location: "Cairo",
      price: "150 EGP"
    },

    {
      id: 2,
      name: "The Pyramids",
      description: "One of the seven wonders of the world",
      image: GIZA,
      location: "Giza",
      price: "240 EGP"
    },

    {
      id: 3,
      name: "Cairo Citadel",
      description: "Historic Islamic castle in Cairo",
      image: QAL3A,
      location: "Cairo",
      price: "180 EGP"
    },

    {
      id: 4,
      name: "Montaza Palace",
      description: "Beautiful royal gardens and sea view",
      image: MONTAZA,
      location: "Alexandria",
      price: "70 EGP"
    },

    {
      id: 5,
      name: "Qaitbay Citadel",
      description: "Famous fortress on the Mediterranean sea",
      image: QAITBAY,
      location: "Alexandria",
      price: "100 EGP"
    },

    {
      id: 6,
      name: "Siwa Oasis",
      description: "Relax and enjoy nature in Siwa",
      image: SIWA,
      location: "Siwa",
      price: "300 EGP"
    },

    {
      id: 7,
      name: "Luxor Temple",
      description: "Ancient Egyptian temple in Luxor",
      image: LUXOR,
      location: "Luxor",
      price: "260 EGP"
    },

    {
      id: 8,
      name: "Aswan Nile",
      description: "Beautiful Nile view and relaxing atmosphere",
      image: NILE,
      location: "Aswan",
      price: "Free"
    }

  ]

  const filteredPlaces = places.filter((place) =>

    place.name
      .toLowerCase()
      .includes(search.toLowerCase())

    &&

    (
      selectedCity === "All"
      ||
      place.location === selectedCity
    )

  )

  return (

    <div className="container mt-5">

      <div className="hero-section">

        <h1

          className="title text-center"

          style={{
            color: darkMode
              ? "white"
              : "white"
          }}

        >

          Explore Egypt 🌍

        </h1>

        <p className="hero-text">

          Discover the beauty of Egypt 🇪🇬

        </p>

      </div>

      <input
        type="text"

        placeholder="Search places..."

        className="form-control mb-4"

        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      <select

        className="form-select mb-5"

        onChange={(event) =>
          setSelectedCity(event.target.value)
        }

      >

        <option value="All">
          All Cities
        </option>

        <option value="Cairo">
          Cairo
        </option>

        <option value="Alexandria">
          Alexandria
        </option>

        <option value="Giza">
          Giza
        </option>

        <option value="Luxor">
          Luxor
        </option>

        <option value="Aswan">
          Aswan
        </option>

        <option value="Siwa">
          Siwa
        </option>

      </select>

      <div className="row">

        {
          filteredPlaces.map((place) => (

            <PlaceCard

              key={place.id}

              id={place.id}

              name={place.name}

              description={place.description}

              image={place.image}

              location={place.location}

              price={place.price}

            />

          ))
        }

      </div>

    </div>

  )
}

export default Home