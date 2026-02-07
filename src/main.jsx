import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Cargador from './features/Cargador/pages/Cargador.jsx'
import Login from './features/Sesion/pages/Login.jsx'
import Register from './features/Sesion/pages/Register.jsx'
import Notallow from './features/Errors/pages/NotAllow.jsx'
import Notfound from './features/Errors/pages/Notfound.jsx'
import Success from './features/Sesion/pages/Success.jsx'
import SuccessController from './features/Sesion/Layout/SuccessLayout.jsx'

import AdminPago from './features/Admin/floatPages/AdminPago.jsx'
import AdminEditarAlquiler from './features/Admin/floatPages/AdminEditarAlquiler.jsx'

import AdminAlquiler from './features/Admin/floatPages/AdminAlquiler.jsx'

import AdminEditarDaño from './features/Admin/floatPages/AdminEditarDaño.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminEditarDaño />
  </React.StrictMode>
)
