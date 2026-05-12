import { useContext } from "react"

import { FavoritesContext }
from "../context/FavoritesContext"

function Favorites() {

  const {

    favorites,

    removeFromFavorites

  } = useContext(FavoritesContext)

  return (

    <div className="container mt-5">

      <h1 className="mb-4">

        Favorites ❤️

      </h1>

      <div className="row">

        {
          favorites.map((place) => (

            <div
              key={place.id}
              className="col-md-4 mb-4"
            >

              <div className="card p-3 h-100 shadow">

                <img
                  src={place.image}
                  className="card-img-top"
                  height="250"
                />

                <div className="card-body">

                  <h3>{place.name}</h3>

                  <p>
                    {place.description}
                  </p>

                  <button

                    className="btn btn-danger"

                    onClick={() =>
                      removeFromFavorites(place.id)
                    }

                  >

                    Remove ❌

                  </button>

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  )
}

export default Favorites