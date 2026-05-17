import { Link }
from "react-router-dom"

import "../styles/home.css"

function Landing() {

  return (

    <div className="container mt-4">

      <div className="hero-section d-flex align-items-center justify-content-center text-center">

        <div>

          <h1 className="hero-title">

            Discover Egypt Like Never Before

          </h1>

          <p className="hero-subtitle">

            Explore the best historical places,
            beaches, and hidden gems across Egypt.

          </p>

          <Link

            to="/explore"

            className="btn btn-warning btn-lg mt-4 px-5 py-3"

          >

            Explore Now

          </Link>

        </div>

      </div>

    </div>

  )
}

export default Landing