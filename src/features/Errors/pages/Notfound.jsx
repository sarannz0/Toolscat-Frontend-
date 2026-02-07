import { useState } from "react";
import "../styles/Notfound.css";

import OpenSuccess from "../../../ComponReactivos/OpenSuccess";
import SuccessController from "../../Sesion/Layout/SuccessLayout";

function Notfound() {
  const [open, setOpen] = useState(false);

  return (
    <main className="notfound_main">
      <div className="notfound_center">
        <div className="notfound_img">
          <img src="/Logo/Gato403.png" alt="" />
        </div>

        <div className="notfound_number">
          <p>403</p>
        </div>

        <div className="notfound_text">
          <p>Permiso denegado</p>
        </div>

        <div className="notfound_button">
          <OpenSuccess onOpen={() => setOpen(true)} />
        </div>
      </div>

      <SuccessController
        open={open}
        onClose={() => setOpen(false)}
      />
    </main>
  );
}

export default Notfound;
