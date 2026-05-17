import { useContext } from "react"

import { FavoritesContext }
from "../context/FavoritesContext"

import { ThemeContext }
from "../context/ThemeContext"

import { Link }
from "react-router-dom"

import { toast }
from "react-toastify"

function PlaceCard(props) {

  const {
    favorites,
    addToFavorites
  } = useContext(FavoritesContext)

  const { darkMode } =
    useContext(ThemeContext)

  const isFavorite =
    favorites.some(
      (item) => item.id === props.id
    )

  function handleFavorite() {

    const added =
      addToFavorites(props)

    if (added) {

      toast.success(
        "Added to Favorites ❤️"
      )

    }

    else {

      toast.error(
        "Already Added ❌"
      )

    }

  }

  return (

    <div className="col-md-4 mb-4">

      <div

        className="card h-100 shadow p-3"

        style={{

          borderRadius: "20px",

          backgroundColor:
            darkMode
              ? "#1e293b"
              : "white",

          color:
            darkMode
              ? "white"
              : "black"

        }}

      >

        <img
          src={props.image}
          className="card-img-top"
          height="250"
        />

        <div className="card-body d-flex flex-column">

          <h5>{props.name}</h5>

          <p>{props.description}</p>

          <h6>
            📍 {props.location}
          </h6>

          <h6>
            🏷️ {props.category}
          </h6>

          <h6 className="text-warning mb-2">
            ⭐ {props.rating}
          </h6>

          <h6 className="mb-3">
            💰 {props.price}
          </h6>

          <div className="d-flex gap-2 mt-auto">

            <button

              className={`btn w-50 ${
                isFavorite
                  ? "btn-success"
                  : "btn-dark"
              }`}

              onClick={handleFavorite}

            >

              {
                isFavorite
                  ? "Added ✅"
                  : "Favorite ❤️"
              }

            </button>

            <Link

              to={`/details/${props.id}`}

              className="btn btn-primary w-50"

            >

              Details

            </Link>

          </div>

        </div>

      </div>

    </div>

  )
}

export default PlaceCard