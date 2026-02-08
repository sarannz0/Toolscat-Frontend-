import '../floatStyles/ProveedorAgregarHerramienta.css'

function ProveedorAddTool() {
  return (
    <div className="proveedor_addtool_overlay">
      <div className="proveedor_addtool_modal">

        {/* Cerrar */}
        <button className="proveedor_addtool_close">×</button>

        {/* Header */}
        <header className="proveedor_addtool_header">
          <h1 className="proveedor_addtool_title">AGREGAR HERRAMIENTA</h1>
          <p className="proveedor_addtool_id">ID - ACSDOOWMD-ACS</p>
        </header>

        <div className="proveedor_addtool_separator" />

        {/* Info */}
        <section className="proveedor_addtool_info">

          <div className="proveedor_addtool_row">
            <span className="proveedor_addtool_label">Nombre</span>
            <input
              className="proveedor_addtool_input"
              defaultValue="Martillos Ingleses"
            />
          </div>

          <div className="proveedor_addtool_row">
            <span className="proveedor_addtool_label">Cantidad</span>
            <input
              className="proveedor_addtool_input"
              type="number"
              defaultValue="1"
            />
          </div>

          <div className="proveedor_addtool_row">
            <span className="proveedor_addtool_label">Precio u/d</span>
            <input
              className="proveedor_addtool_input"
              defaultValue="2000 COP"
            />
          </div>

        </section>

        <div className="proveedor_addtool_separator" />

        {/* Descripción */}
        <section className="proveedor_addtool_info">
          <span className="proveedor_addtool_label">Descripcion</span>
          <textarea
            className="proveedor_addtool_textarea"
            placeholder="Describe la herramienta..."
          />
        </section>

        <div className="proveedor_addtool_separator" />

        {/* Acción */}
        <section className="proveedor_addtool_actions">
          <button className="proveedor_addtool_action_btn">
            Guardar
          </button>
        </section>

      </div>
    </div>
  );
}

export default ProveedorAddTool;
