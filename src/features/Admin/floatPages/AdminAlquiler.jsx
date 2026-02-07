import '../floatStyles/AdminAlquiler.css'

function AdminAlquiler() {
  return (
    <div className="admin_alquiler_overlay">
      <div className="admin_alquiler_modal">

        {/* Cerrar */}
        <button className="admin_alquiler_close">
          ×
        </button>

        {/* Header */}
        <header className="admin_alquiler_header">
          <h1 className="admin_alquiler_title">ALQUILER</h1>
          <p className="admin_alquiler_id">ID - ACSDOOWMD-ACS</p>
        </header>

        <div className="admin_alquiler_separator" />

        {/* Info */}
        <section className="admin_alquiler_info">
          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Cliente</span>
            <span className="admin_alquiler_value">Bramdon Blanco</span>
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Metodo Pago</span>
            <span className="admin_alquiler_value">Tarjeta</span>
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Nombre Herramienta</span>
            <span className="admin_alquiler_value">Martillos Ingleses</span>
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Fecha Inicio</span>
            <span className="admin_alquiler_value">05/11/2000</span>
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Fecha Final</span>
            <span className="admin_alquiler_value">05/11/2000</span>
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Pago ID</span>
            <span className="admin_alquiler_value">24</span>
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Estado Alquiler</span>
            <span className="admin_alquiler_badge admin_alquiler_badge_danio">
              Daño
            </span>
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Total</span>
            <span className="admin_alquiler_total">2.000.000</span>
          </div>
        </section>

        {/* Estado devolución */}
        <section className="admin_alquiler_estado">
          <p className="admin_alquiler_estado_title">Estado Devolucion</p>

          <div className="admin_alquiler_estado_buttons">
            <button className="admin_alquiler_estado_btn">
              Recibido
            </button>

            <button className="admin_alquiler_estado_btn">
              Alquilado
            </button>

            <button className="admin_alquiler_estado_btn admin_alquiler_estado_btn_active">
              Daño
            </button>
          </div>
        </section>

        <div className="admin_alquiler_separator" />

        {/* Acciones */}
        <section className="admin_alquiler_actions">
          <button className="admin_alquiler_action_btn">
            Guardar
          </button>

          <button className="admin_alquiler_action_btn">
            Imprimir
          </button>
        </section>

      </div>
    </div>
  );
}

export default AdminAlquiler;
