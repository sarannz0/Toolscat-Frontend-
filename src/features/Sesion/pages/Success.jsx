import "../styles/Success.css";
import CloseCircle from "../../../Components/Cerrar";

function Success({ onClose }) {
  return (
    <main className="success">
      <div className="success_center">
        <h1>Cuenta Creada</h1>

        <img src="/icons/Group 1168.png" alt="" />

        <button>Iniciar Sesión</button>

        <CloseCircle onClick={onClose} />
      </div>
    </main>
  );
}

export default Success;
