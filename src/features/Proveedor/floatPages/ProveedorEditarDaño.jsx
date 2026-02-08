import "../floatStyles/ProveedorEditarDaño.css";

function ProveedorEditarDanio() {
  return (
    <div className="proveedor_editdanio_overlay">
      <div className="proveedor_editdanio_modal">

        {/* Cerrar */}
        <button className="proveedor_editdanio_close">×</button>

        {/* Header */}
        <header className="proveedor_editdanio_header">
          <h1 className="proveedor_editdanio_title">EDITAR DAÑO</h1>
          <p className="proveedor_editdanio_id">
            ID - ACSDOOWMD-ACS &nbsp;&nbsp;&nbsp; Cliente: Brandon Blanco
          </p>
        </header>

        <div className="proveedor_editdanio_separator" />

        {/* Info */}
        <section className="proveedor_editdanio_info">

          <div className="proveedor_editdanio_row">
            <span className="proveedor_editdanio_label">Nombre Herramienta</span>
            <span className="proveedor_editdanio_text">Martillos Ingleses</span>
          </div>

          <div className="proveedor_editdanio_row">
            <span className="proveedor_editdanio_label">Cliente</span>
            <span className="proveedor_editdanio_text">Brandon Blanco</span>
          </div>

          <div className="proveedor_editdanio_row">
            <span className="proveedor_editdanio_label">Proveedor</span>
            <span className="proveedor_editdanio_text">CitySkyLines</span>
          </div>

        </section>

        <div className="proveedor_editdanio_separator" />

        {/* Descripción */}
        <section className="proveedor_editdanio_info">
          <span className="proveedor_editdanio_label">Descripcion</span>
          <textarea
            className="proveedor_editdanio_textarea"
            placeholder=""
          />
        </section>

        <div className="proveedor_editdanio_separator" />

        {/* Estado daño */}
        <section className="proveedor_editdanio_actions">
          <div className="proveedor_editdanio_toggle">
            <button className="proveedor_editdanio_toggle_btn">
              Sin Daño
            </button>
            <button className="proveedor_editdanio_toggle_btn active">
              Con Daño
            </button>
          </div>

          <button className="proveedor_editdanio_action_btn">
            Guardar
          </button>
        </section>

      </div>
    </div>
  );
}

export default ProveedorEditarDanio;
