import { useContext } from "react"

import { FavoritesContext }
from "../context/FavoritesContext"

import { Link }
from "react-router-dom"

function PlaceCard(props) {

  const { addToFavorites } =
    useContext(FavoritesContext)

  return (

    <div className="col-md-4 mb-4">

      <div
        className="card h-100 shadow p-3"
        style={{ borderRadius: "20px" }}
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

          <h6 className="mb-3">
            💰 {props.price}
          </h6>

          <div className="d-flex gap-2 mt-auto">

            <button

              className="btn btn-dark w-50"

              onClick={() =>
                addToFavorites(props)
              }

            >

              Favorite ❤️

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