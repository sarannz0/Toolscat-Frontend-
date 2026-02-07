import { useState } from "react";
import Success from "../pages/Success";

function SuccessController({ open, onClose }) {
  if (!open) return null;

  return <Success onClose={onClose} />;
}

export default SuccessController;
