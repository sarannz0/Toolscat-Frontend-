import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/*Admin Components Sesion*/ 
import Cargador from './features/Cargador/pages/Cargador.jsx'
import Login from './features/Sesion/pages/Login.jsx'
import Register from './features/Sesion/pages/Register.jsx'

/*Components Errores*/ 
import Notallow from './features/Errors/pages/NotAllow.jsx'
import Notfound from './features/Errors/pages/Notfound.jsx'

/*Admin Components Aprobacion de cuenta*/ 
import Success from './features/Sesion/pages/Success.jsx'
import SuccessController from './features/Sesion/Layout/SuccessLayout.jsx'

/*Admin Components Flotantes*/ 
import AdminPago from './features/Admin/floatPages/AdminPago.jsx'
import AdminAlquiler from './features/Admin/floatPages/AdminAlquiler.jsx'
import AdminEditarAlquiler from './features/Admin/floatPages/AdminEditarAlquiler.jsx'
import AdminEditarDaño from './features/Admin/floatPages/AdminEditarDaño.jsx'

/*Proveedor Components Flotantes*/ 
import ProveedorAddTool from './features/Proveedor/floatPages/ProveedorAgregarHerramienta.jsx'
import ProveedorEditarHerramienta from './features/Proveedor/floatPages/ProveedorEditarHerramienta.jsx'
import ProveedorEditarDanio from './features/Proveedor/floatPages/ProveedorEditarDaño.jsx'
import ProveedorAlquiler from './features/Proveedor/floatPages/ProveedorAlquiler.jsx'

/*Proveedor Components Flotantes*/ 
import DashboardBase from './features/DashboardBase/Dashbase.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DashboardBase />
  </React.StrictMode>
)
