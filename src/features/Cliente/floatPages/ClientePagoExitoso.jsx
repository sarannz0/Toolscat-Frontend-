import '../floatStyles/ClientePagoExitoso.css'

function ClientePagoExitoso({ onClose }) {
  return (
    <div className="cliente_pago_exitoso_overlay">
      <div className="cliente_pago_exitoso_modal">
        
        {/* Cerrar */}
        <button 
          className="cliente_pago_exitoso_close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Header con título */}
        <header className="cliente_pago_exitoso_header">
          <h1 className="cliente_pago_exitoso_title">Pago Realizado</h1>
        </header>

        {/* Ícono de éxito con imagen PNG */}
        <div className="cliente_pago_exitoso_icon_container">
            <img 
              src="/icons/icono_chulo_transparente_fondo_negro.png" 
              alt="Pago exitoso"
              className="cliente_pago_exitoso_icon"
            />
        </div>

        {/* Mensaje */}
        <p className="pago_exitoso_text">
          Tu pago se ha realizado<br />
          Exitosamente
        </p>

        {/* Botón de acción */}
        <section className="cliente_pago_exitoso_actions">
          <button 
            className="cliente_pago_exitoso_action_btn"
            onClick={onClose}
          >
            Volver
          </button>
        </section>

      </div>
    </div>
  );
}

export default ClientePagoExitoso;
