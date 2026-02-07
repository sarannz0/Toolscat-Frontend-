import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Cargador from './features/Cargador/pages/Cargador.jsx'
import Login from './features/Sesion/pages/Login.jsx'
import Register from './features/Sesion/pages/Register.jsx'
import Notallow from './features/Errors/pages/NotAllow.jsx'
import Notfound from './features/Errors/pages/Notfound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Notallow />
    <Notfound />

  </React.StrictMode>
)
