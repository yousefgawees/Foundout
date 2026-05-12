import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import FavoritesProvider from './context/FavoritesContext'
import ThemeProvider from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <ThemeProvider>

      <FavoritesProvider>

        <App />

      </FavoritesProvider>

    </ThemeProvider>

  </React.StrictMode>

)