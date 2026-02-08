import "../floatStyles/ProovedorAlquiler.css";

function ProveedorAlquiler() {
  return (
    <div className="proveedor_alquiler_overlay">
      <div className="proveedor_alquiler_modal">

        {/* Cerrar */}
        <button className="proveedor_alquiler_close">×</button>

        {/* Header */}
        <header className="proveedor_alquiler_header">
          <h1 className="proveedor_alquiler_title">ALQUILER</h1>
          <p className="proveedor_alquiler_id">
            ID - ACSDOOWMD-ACS
          </p>
        </header>

        <div className="proveedor_alquiler_separator" />

        {/* Info */}
        <section className="proveedor_alquiler_info">

          <div className="proveedor_alquiler_row">
            <span className="proveedor_alquiler_label">Cliente</span>
            <span className="proveedor_alquiler_text">Brandon Blanco</span>
          </div>

          <div className="proveedor_alquiler_row">
            <span className="proveedor_alquiler_label">Metodo Pago</span>
            <span className="proveedor_alquiler_text">Tarjeta</span>
          </div>

          <div className="proveedor_alquiler_row">
            <span className="proveedor_alquiler_label">Nombre Herramienta</span>
            <span className="proveedor_alquiler_text">Martillos Ingleses</span>
          </div>

          <div className="proveedor_alquiler_row">
            <span className="proveedor_alquiler_label">Fecha Inicio</span>
            <span className="proveedor_alquiler_text">05/11/2000</span>
          </div>

          <div className="proveedor_alquiler_row">
            <span className="proveedor_alquiler_label">Fecha Final</span>
            <span className="proveedor_alquiler_text">05/11/2000</span>
          </div>

          <div className="proveedor_alquiler_row">
            <span className="proveedor_alquiler_label">Pago ID</span>
            <span className="proveedor_alquiler_text">24</span>
          </div>

          <div className="proveedor_alquiler_row">
            <span className="proveedor_alquiler_label">Estado Alquiler</span>
            <span className="proveedor_alquiler_badge">Daño</span>
          </div>

          <div className="proveedor_alquiler_row">
            <span className="proveedor_alquiler_label">Total</span>
            <span className="proveedor_alquiler_text">2.000.000</span>
          </div>

        </section>

        <div className="proveedor_alquiler_separator" />

        {/* Estado devolución */}
        <section className="proveedor_alquiler_actions">
          <span className="proveedor_alquiler_label center">
            Estado Devolucion
          </span>

          <div className="proveedor_alquiler_toggle">
            <button className="proveedor_alquiler_toggle_btn">Recibido</button>
            <button className="proveedor_alquiler_toggle_btn">Alquilado</button>
            <button className="proveedor_alquiler_toggle_btn active">Daño</button>
          </div>

          <button className="proveedor_alquiler_action_btn">
            Guardar
          </button>

          <button className="proveedor_alquiler_action_btn">
            Imprimir
          </button>
        </section>

      </div>
    </div>
  );
}

export default ProveedorAlquiler;
