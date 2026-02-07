import "../floatStyles/AdminEditarAlquiler.css";

function AdminEditarAlquiler() {
  return (
    <div className="admin_alquiler_overlay">
      <div className="admin_alquiler_modal">

        <button className="admin_alquiler_close">×</button>

        <header className="admin_alquiler_header">
          <h1 className="admin_alquiler_title">Editar Alquiler</h1>
          <p className="admin_alquiler_id">ID - ACSDOOWMD-ACS</p>
        </header>

        <div className="admin_alquiler_separator" />

        <section className="admin_alquiler_info">

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Cliente</span>
            <input
              className="admin_alquiler_input"
              defaultValue="Bramdon Blanco"
            />
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Metodo Pago</span>
            <select className="admin_alquiler_input">
              <option>Tarjeta</option>
              <option>Efectivo</option>
              <option>Transferencia</option>
            </select>
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Nombre Herramienta</span>
            <input
              className="admin_alquiler_input"
              defaultValue="Martillos Ingleses"
            />
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Fecha Inicio</span>
            <input
              type="date"
              className="admin_alquiler_input"
              defaultValue="2000-11-05"
            />
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Fecha Final</span>
            <input
              type="date"
              className="admin_alquiler_input"
              defaultValue="2000-11-05"
            />
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Pago ID</span>
            <input
              className="admin_alquiler_input"
              defaultValue="24"
            />
          </div>

          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Estado Alquiler</span>
            <select className="admin_alquiler_input">
              <option>Activo</option>
              <option>Finalizado</option>
              <option>Daño</option>
            </select>
          </div>

        </section>

        <div className="admin_alquiler_separator" />

        <section className="admin_alquiler_info">
          <div className="admin_alquiler_row">
            <span className="admin_alquiler_label">Total</span>
            <input
              className="admin_alquiler_input admin_alquiler_total"
              defaultValue="2.000.000"
            />
          </div>
        </section>

        <div className="admin_alquiler_separator" />


        <section className="admin_alquiler_actions">
          <button className="admin_alquiler_action_btn">Guardar</button>
          <button className="admin_alquiler_action_btn">Imprimir</button>
        </section>

      </div>
    </div>
  );
}

export default AdminEditarAlquiler;
