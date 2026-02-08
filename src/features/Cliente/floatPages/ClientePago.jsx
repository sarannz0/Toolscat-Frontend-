import "../floatStyles/ClientePago.css";

function ClientePago() {
  return (
    <div className="cliente_pago_overlay">
      <div className="cliente_pago_modal">

        {/* Cerrar */}
        <button className="cliente_pago_close">×</button>

        {/* Header */}
        <header className="cliente_pago_header">
          <h1 className="cliente_pago_title">PAGO</h1>
          <p className="cliente_pago_id">ID - ACSDOOWMD-ACS</p>
        </header>

        <div className="cliente_pago_separator" />

        {/* Información del pago */}
        <section className="cliente_pago_info">
          <div className="cliente_pago_row">
            <span className="cliente_pago_label">Cliente</span>
            <span className="cliente_pago_value">Sebastian Montoya</span>
          </div>

          <div className="cliente_pago_row">  
            <span className="cliente_pago_label">Nombre Herramienta</span>
            <span className="cliente_pago_value">Pada Lustro</span>
          </div>

          <div className="cliente_pago_row">
            <span className="cliente_pago_label">Cantidad</span>
            <span className="cliente_pago_value">16 M</span>
          </div>

          <div className="cliente_pago_row">
            <span className="cliente_pago_label">Valor c/u</span>
            <span className="cliente_pago_value">98.000</span>
          </div>

          <div className="cliente_pago_row">
            <span className="cliente_pago_label">Fecha Pago</span>
            <span className="cliente_pago_value">05/11/2000</span>
          </div>

          <div className="cliente_pago_row">
            <span className="cliente_pago_label">Metodo de Pago</span>
            <span className="cliente_pago_value">Efectivo</span>
          </div>
        </section>

        <div className="cliente_pago_separator" />

        {/* Total */}
        <section className="cliente_pago_info">
          <div className="cliente_pago_row">
            <span className="cliente_pago_label">Total</span>
            <span className="cliente_pago_total">192.000 COP</span>
          </div>
        </section>

        <div className="cliente_pago_separator" />

        {/* Acciones */}
        <section className="cliente_pago_actions">
          <button className="cliente_pago_action_btn">
            Imprimir
          </button>
        </section>

      </div>
    </div>
  );
}

export default ClientePago;
