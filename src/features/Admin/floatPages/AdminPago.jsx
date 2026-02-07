import "../floatStyles/AdminPago.css";

function AdminPago() {

  

  
  return (
    <div className="admin_pago_overlay">
      <div className="admin_pago_modal">

        {/* Cerrar */}
        <button className="admin_pago_close">×</button>

        {/* Header */}
        <header className="admin_pago_header">
          <h1 className="admin_pago_title">PAGO</h1>
          <p className="admin_pago_id">ID - ACSDOOWMD-ACS</p>
        </header>

        <div className="admin_pago_separator" />

        {/* Información del pago */}
        <section className="admin_pago_info">
          <div className="admin_pago_row">
            <span className="admin_pago_label">Cliente</span>
            <span className="admin_pago_value">Bramdon Blanco</span>
          </div>

          <div className="admin_pago_row">
            <span className="admin_pago_label">Nombre Herramienta</span>
            <span className="admin_pago_value">Martillos Ingleses</span>
          </div>

          <div className="admin_pago_row">
            <span className="admin_pago_label">Cantidad</span>
            <span className="admin_pago_value">24</span>
          </div>

          <div className="admin_pago_row">
            <span className="admin_pago_label">Valor c/u</span>
            <span className="admin_pago_value">8.000</span>
          </div>

          <div className="admin_pago_row">
            <span className="admin_pago_label">Fecha Pago</span>
            <span className="admin_pago_value">05/11/2000</span>
          </div>

          <div className="admin_pago_row">
            <span className="admin_pago_label">Metodo de Pago</span>
            <span className="admin_pago_value">Efectivo</span>
          </div>
        </section>

        <div className="admin_pago_separator" />

        {/* Total */}
        <section className="admin_pago_info">
          <div className="admin_pago_row">
            <span className="admin_pago_label">Total</span>
            <span className="admin_pago_total">192.000 COP</span>
          </div>
        </section>

        <div className="admin_pago_separator" />

        {/* Acciones */}
        <section className="admin_pago_actions">
          <button className="admin_pago_action_btn">
            Imprimir
          </button>
        </section>

      </div>
    </div>
  );
}

export default AdminPago;
