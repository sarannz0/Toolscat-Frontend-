import '../floatStyles/ClienteDetalleProductoAlquiler.css';

function ClienteDetalleProductoAlquiler({ 
  onClose, 
  producto = {
    nombre: 'Pada Lustro',
    imagen: '', 
    disponible: true,
    // disponible: false, // No disponible
    // enMantenimiento: false, // En mantenimiento
    descripcion: 'Tipo de manguera para agua con una longitud de 10 metros y un diametro de 1/2 pulgada.',
    fechaInicio: '05/11/2000',
    fechaFin: '05/11/2000',
    precioHora: 35000,
    cantidadHoras: 42,
    id: 'DG8SEB.DK8D.JW'
  },
  onAnadir
}) {
  
  const calcularTotal = () => {
    return producto.precioHora * producto.cantidadHoras;
  };

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CO').format(precio);
  };

  const obtenerEstado = () => {
    // if (producto.enMantenimiento) return { texto: 'En Mantenimiento', clase: 'mantenimiento' };
    // if (!producto.disponible) return { texto: 'No Disponible', clase: 'no_disponible' };
    return { texto: 'Disponible', clase: 'disponible' };
    // return { texto: 'No Disponible', clase: 'no_disponible' };
    //return { texto: 'En Mantenimiento', clase: 'mantenimiento' };

  };

    const handleAnadir = () => {
    if (producto.disponible && onAnadir) {
      onAnadir(producto);
    }
  };

  const estado = obtenerEstado();

  return (
    <div className="detalle_producto_alquiler_overlay">
      <div className="detalle_producto_alquiler_modal">
        
        {/* Cerrar */}
        <button 
          className="detalle_producto_alquiler_close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Header con nombre */}
        <header className="detalle_producto_alquiler_header">
          <h1 className="detalle_producto_alquiler_title">{producto.nombre}</h1>
          
          {/* Badge de disponibilidad */}
          <span className={`detalle_producto_alquiler_badge detalle_producto_alquiler_badge_${estado.clase}`}>
            {estado.texto}
          </span>
        </header>

        {/* Descripción */}
        <p className="detalle_producto_alquiler_descripcion">
          {producto.descripcion}
        </p>

        {/* Imagen de la herramienta */}
        <div className="detalle_producto_alquiler_imagen_container">
          {producto.imagen ? (
            <img 
              src={producto.imagen} 
              alt={producto.nombre}
              className="detalle_producto_alquiler_imagen"
            />
          ) : (
            <div className="detalle_producto_alquiler_imagen_placeholder" />
          )}
        </div>

        {/* Detalles del alquiler */}
        <section className="detalle_producto_alquiler_info">
          <div className="detalle_producto_alquiler_row">
            <span className="detalle_producto_alquiler_label">Fecha Inicio</span>
            <span className="detalle_producto_alquiler_value">{producto.fechaInicio}</span>
          </div>

          <div className="detalle_producto_alquiler_row">
            <span className="detalle_producto_alquiler_label">Fecha Fin</span>
            <span className="detalle_producto_alquiler_value">{producto.fechaFin}</span>
          </div>

          <div className="detalle_producto_alquiler_row">
            <span className="detalle_producto_alquiler_label">Precio Hora</span>
            <span className="detalle_producto_alquiler_value">
              {formatearPrecio(producto.precioHora)} COP
            </span>
          </div>

          <div className="detalle_producto_alquiler_row">
            <span className="detalle_producto_alquiler_label">Cantidad de Horas</span>
            <span className="detalle_producto_alquiler_value">{producto.cantidadHoras}</span>
          </div>
        </section>

        <div className="detalle_producto_alquiler_separator" />

        {/* Total */}
        <section className="detalle_producto_alquiler_total_section">
          <h2 className="detalle_producto_alquiler_total_title">Total</h2>
          <p className="detalle_producto_alquiler_total_precio">
            {formatearPrecio(calcularTotal())} COP
          </p>
          <p className="detalle_producto_alquiler_id">ID: {producto.id}</p>
          
          {/* Botón Añadir */}
        </section>

      </div>
    </div>
  );
}

export default ClienteDetalleProductoAlquiler;
