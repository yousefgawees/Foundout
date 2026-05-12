import { createContext, useState } from "react"

export const FavoritesContext =
  createContext()

function FavoritesProvider({ children }) {

  const [favorites, setFavorites] =
    useState([])

  function addToFavorites(place) {

    setFavorites([...favorites, place])

  }

  function removeFromFavorites(id) {

    const updatedFavorites =
      favorites.filter(
        (place) => place.id !== id
      )

    setFavorites(updatedFavorites)

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