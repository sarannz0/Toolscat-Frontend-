import "../floatStyles/AdminEditarDaño.css";

function AdminEditarDaño() {
  return (
    <div className="admin_editar_danio_overlay">
      <div className="admin_editar_danio_modal">

        {/* Cerrar */}
        <button className="admin_editar_danio_close">×</button>

        {/* Header */}
        <header className="admin_editar_danio_header">
          <h1 className="admin_editar_danio_title">EDITAR DAÑO</h1>
          <div className="admin_editar_danio_sub">
            <span>ID - ACSDOOWMD-ACS</span>
            <span>Cliente: Bramdon Blanco</span>
          </div>
        </header>

        <div className="admin_editar_danio_separator" />

        {/* Información */}
        <section className="admin_editar_danio_info">

          <div className="admin_editar_danio_row">
            <span className="admin_editar_danio_label">Nombre Herramienta</span>
            <input
              className="admin_editar_danio_input"
              defaultValue="Martillos Ingleses"
            />
          </div>

          <div className="admin_editar_danio_row">
            <span className="admin_editar_danio_label">Cliente</span>
            <input
              className="admin_editar_danio_input"
              defaultValue="Bramdon Blanco"
            />
          </div>

          <div className="admin_editar_danio_row">
            <span className="admin_editar_danio_label">Proveedor</span>
            <input
              className="admin_editar_danio_input"
              defaultValue="CitySkyLines"
            />
          </div>

        </section>

        <div className="admin_editar_danio_separator" />

        {/* Descripción */}
        <section className="admin_editar_danio_info">
          <span className="admin_editar_danio_label">Descripcion</span>
          <textarea
            className="admin_editar_danio_textarea"
            placeholder="Describe el daño..."
          />
        </section>

        <div className="admin_editar_danio_separator" />

        {/* Estado */}
        <section className="admin_editar_danio_estado">
          <button className="admin_editar_danio_estado_btn">
            Sin Daño
          </button>

          <button className="admin_editar_danio_estado_btn admin_editar_danio_estado_btn_active">
            Con Daño
          </button>
        </section>

        <div className="admin_editar_danio_separator" />

        {/* Acción */}
        <section className="admin_editar_danio_actions">
          <button className="admin_editar_danio_action_btn">
            Guardar
          </button>
        </section>

      </div>
    </div>
  );
}

export default AdminEditarDaño;
