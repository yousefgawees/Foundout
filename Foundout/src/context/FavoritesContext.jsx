import { createContext, useState }
from "react"

export const FavoritesContext =
  createContext()

function FavoritesProvider({ children }) {

  const [favorites, setFavorites] =
    useState(

      JSON.parse(

        localStorage.getItem("favorites")

      ) || []

    )

  function addToFavorites(place) {

    const exists = favorites.some(

      (item) => item.id === place.id

    )

    if (exists) {

      return false

    }

    const updatedFavorites = [

      ...favorites,

      place

    ]

    setFavorites(updatedFavorites)

    localStorage.setItem(

      "favorites",

      JSON.stringify(updatedFavorites)

    )

    return true

  }

  function removeFromFavorites(id) {

    const updatedFavorites =

      favorites.filter(

        (place) => place.id !== id

      )

    setFavorites(updatedFavorites)

    localStorage.setItem(

      "favorites",

      JSON.stringify(updatedFavorites)

    )

  }

  return (

    <FavoritesContext.Provider

      value={{

        favorites,

        addToFavorites,

        removeFromFavorites

      }}

    >

      {children}

    </FavoritesContext.Provider>

  )
}

export default FavoritesProvider