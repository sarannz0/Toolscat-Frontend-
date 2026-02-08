import { useState } from 'react';
import '../floatStyles/ClienteAgregarTarjeta.css';

function ClienteAgregarTarjeta({ onClose, onGuardar }) {
  const [formData, setFormData] = useState({
    nombreUsuario: '',
    numeroTarjeta: '',
    fecha: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Validaciones según el campo
    if (name === 'numeroTarjeta') {
      // Solo números y máximo 16 dígitos
      newValue = value.replace(/\D/g, '').slice(0, 16);
    } else if (name === 'cvv') {
      // Solo números y máximo 4 dígitos
      newValue = value.replace(/\D/g, '').slice(0, 4);
    } else if (name === 'fecha') {
      // Formato MM/YY
      newValue = value.replace(/\D/g, '').slice(0, 4);
      if (newValue.length >= 2) {
        newValue = newValue.slice(0, 2) + '/' + newValue.slice(2);
      }
    } else if (name === 'nombreUsuario') {
      // Solo letras y espacios
      newValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '').slice(0, 30);
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const formatCardNumber = (number) => {
    // Formato de tarjeta: **** **** **** 1234
    if (!number) return '**** **** **** ****';
    const cleaned = number.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    
    // Rellenar con asteriscos hasta completar 16 dígitos
    const totalChars = 19; // 16 dígitos + 3 espacios
    if (formatted.length < totalChars) {
      const remaining = 16 - cleaned.length;
      const asterisks = '*'.repeat(remaining);
      const asterisksFormatted = asterisks.match(/.{1,4}/g)?.join(' ') || asterisks;
      return (formatted + ' ' + asterisksFormatted).trim().slice(0, totalChars);
    }
    return formatted;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombreUsuario || !formData.numeroTarjeta || 
        !formData.fecha || !formData.cvv) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Validar longitud mínima
    if (formData.numeroTarjeta.length < 13) {
      alert('El número de tarjeta debe tener al menos 13 dígitos');
      return;
    }

    if (formData.cvv.length < 3) {
      alert('El CVV debe tener al menos 3 dígitos');
      return;
    }

    if (formData.fecha.length < 5) {
      alert('La fecha debe tener formato MM/YY');
      return;
    }

    // Guardar y cerrar
    if (onGuardar) {
      onGuardar(formData);
    }
    
    onClose();
  };

  return (
    <div className="agregar_tarjeta_overlay">
      <div className="agregar_tarjeta_modal">
        
        {/* Cerrar */}
        <button 
          className="agregar_tarjeta_close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Header */}
        <header className="agregar_tarjeta_header">
          <h1 className="agregar_tarjeta_title">
            Agregar<br />Tarjeta
          </h1>
        </header>

        <div className="agregar_tarjeta_separator" />

        {/* Tarjeta visual centrada */}
        <div className="agregar_tarjeta_card_container">
          <div className="agregar_tarjeta_card">
            {/* Círculos de marca */}
            <div className="agregar_tarjeta_card_circles">
              <div className="agregar_tarjeta_card_circle agregar_tarjeta_card_circle_red"></div>
              <div className="agregar_tarjeta_card_circle agregar_tarjeta_card_circle_orange"></div>
            </div>
            
            {/* Datos de la tarjeta */}
            <div className="agregar_tarjeta_card_content">
              <div className="agregar_tarjeta_card_number">
                {formatCardNumber(formData.numeroTarjeta)}
              </div>
              <div className="agregar_tarjeta_card_bottom">
                <div className="agregar_tarjeta_card_name">
                  {formData.nombreUsuario || 'NOMBRE'}
                </div>
                <div className="agregar_tarjeta_card_details">
                  <span className="agregar_tarjeta_card_date">
                    {formData.fecha || 'MM/YY'}
                  </span>
                  <span className="agregar_tarjeta_card_cvv">
                    {formData.cvv || 'CVV'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="agregar_tarjeta_form">
          
          {/* Nombre Usuario */}
          <div className="agregar_tarjeta_row_single">
            <input
              type="text"
              name="nombreUsuario"
              placeholder="Nombre Usuario"
              className="agregar_tarjeta_input"
              value={formData.nombreUsuario}
              onChange={handleChange}
            />
          </div>

          {/* Número de tarjeta */}
          <div className="agregar_tarjeta_row_single">
            <input
              type="text"
              name="numeroTarjeta"
              placeholder="Numero de tarjeta"
              className="agregar_tarjeta_input"
              value={formData.numeroTarjeta}
              onChange={handleChange}
            />
          </div>

          {/* Fecha y CCV */}
          <div className="agregar_tarjeta_row_double">
            <input
              type="text"
              name="fecha"
              placeholder="Fecha"
              className="agregar_tarjeta_input agregar_tarjeta_input_half"
              value={formData.fecha}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CCV"
              className="agregar_tarjeta_input agregar_tarjeta_input_half"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>

          {/* Botón Guardar */}
          <div className="agregar_tarjeta_actions">
            <button type="submit" className="agregar_tarjeta_action_btn">
              Guardar tarjeta
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default ClienteAgregarTarjeta;
