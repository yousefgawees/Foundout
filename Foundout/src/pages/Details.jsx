import { useParams }
from "react-router-dom"

import { useContext }
from "react"

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

function Details() {

  const { darkMode } =
    useContext(ThemeContext)

  const { id } = useParams()

  const places = [

    {
      id: 1,
      name: "Cairo Tower",
      description: "Amazing city view in Cairo",
      image: TOWER,
      location: "Cairo",
      price: "150 EGP",
      rating: "4.8",
      map:
        "https://maps.google.com/?q=Cairo+Tower"
    },

    {
      id: 2,
      name: "The Pyramids",
      description: "One of the seven wonders of the world",
      image: GIZA,
      location: "Giza",
      price: "240 EGP",
      rating: "5.0",
      map:
        "https://maps.google.com/?q=Pyramids+of+Giza"
    },

    {
      id: 3,
      name: "Cairo Citadel",
      description: "Historic Islamic castle in Cairo",
      image: QAL3A,
      location: "Cairo",
      price: "180 EGP",
      rating: "4.7",
      map:
        "https://maps.google.com/?q=Cairo+Citadel"
    },

    {
      id: 4,
      name: "Montaza Palace",
      description: "Beautiful royal gardens and sea view",
      image: MONTAZA,
      location: "Alexandria",
      price: "Free",
      rating: "4.6",
      map:
        "https://maps.google.com/?q=Montaza+Palace"
    },

    {
      id: 5,
      name: "Qaitbay Citadel",
      description: "Famous fortress on the Mediterranean sea",
      image: QAITBAY,
      location: "Alexandria",
      price: "100 EGP",
      rating: "4.9",
      map:
        "https://maps.google.com/?q=Qaitbay+Citadel"
    },

    {
      id: 6,
      name: "Siwa Oasis",
      description: "Relax and enjoy nature in Siwa",
      image: SIWA,
      location: "Siwa",
      price: "300 EGP",
      rating: "4.8",
      map:
        "https://maps.google.com/?q=Siwa+Oasis"
    },

    {
      id: 7,
      name: "Luxor Temple",
      description: "Ancient Egyptian temple in Luxor",
      image: LUXOR,
      location: "Luxor",
      price: "260 EGP",
      rating: "5.0",
      map:
        "https://maps.google.com/?q=Luxor+Temple"
    },

    {
      id: 8,
      name: "Aswan Nile",
      description: "Beautiful Nile view and relaxing atmosphere",
      image: NILE,
      location: "Aswan",
      price: "Free",
      rating: "4.7",
      map:
        "https://maps.google.com/?q=Aswan+Nile"
    }

  ]

  const place = places.find(
    (item) => item.id == id
  )

  return (

    <div className="container mt-5">

      <div

        className="card p-4 shadow details-card"

        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "20px"
        }}

      >

        <img
          src={place.image}
          className="img-fluid rounded"
          height="500"
        />

        <h1 className="mt-4">

          {place.name}

        </h1>

        <p className="mt-3">

          {place.description}

        </p>

        <h4>

          📍 {place.location}

        </h4>

        <h5 className="text-warning mt-3">

          ⭐ {place.rating}

        </h5>

        <h5 className="mt-3">

          💰 {place.price}

        </h5>

        <a

          href={place.map}

          target="_blank"

          className="btn btn-success mt-4"

        >

          Open in Maps 🗺️

        </a>

      </div>

    </div>

  )
}

export default Details