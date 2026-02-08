import "../floatStyles/ProveedorEditarHerramienta.css";

function ProveedorEditarHerramienta() {
  return (
    <div className="proveedor_edittool_overlay">
      <div className="proveedor_edittool_modal">

        {/* Cerrar */}
        <button className="proveedor_edittool_close">×</button>

        {/* Header */}
        <header className="proveedor_edittool_header">
          <h1 className="proveedor_edittool_title">EDITAR HERRAMIENTA</h1>
          <p className="proveedor_edittool_id">ID - ACSDOOWMD-ACS</p>
        </header>

        <div className="proveedor_edittool_separator" />

        {/* Info */}
        <section className="proveedor_edittool_info">

          <div className="proveedor_edittool_row">
            <span className="proveedor_edittool_label">Nombre</span>
            <input
              className="proveedor_edittool_input"
              defaultValue="Martillos Ingleses"
            />
          </div>

          <div className="proveedor_edittool_row">
            <span className="proveedor_edittool_label">Cantidad</span>
            <input
              className="proveedor_edittool_input"
              type="number"
              defaultValue="1"
            />
          </div>

          <div className="proveedor_edittool_row">
            <span className="proveedor_edittool_label">Precio u/d</span>
            <input
              className="proveedor_edittool_input"
              defaultValue="2000 COP"
            />
          </div>

        </section>

        <div className="proveedor_edittool_separator" />

        {/* Descripción */}
        <section className="proveedor_edittool_info">
          <span className="proveedor_edittool_label">Descripcion</span>
          <textarea
            className="proveedor_edittool_textarea"
            placeholder="Describe la herramienta..."
          />
        </section>

        <div className="proveedor_edittool_separator" />

        {/* Acción */}
        <section className="proveedor_edittool_actions">
          <button className="proveedor_edittool_action_btn">
            Guardar
          </button>
        </section>

      </div>
    </div>
  );
}

export default ProveedorEditarHerramienta;
