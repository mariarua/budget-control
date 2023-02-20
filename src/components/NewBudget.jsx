import { useState } from "react";
import Message from "./Message";

function NewBudget({ budget, setBudget, setIsValidBudget }) {
  const [message, setMessage] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();
    if (!Number(budget) || Number(budget) <= 0) {
      setMessage("No es un presupuesto valido");
      return;
    }
    setMessage("");
    setIsValidBudget(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label>Denifir presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={budget}
            onClick={(e) => e.target.select()}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {message && <Message tipo="error">{message}</Message>}
      </form>
    </div>
  );
}

export default NewBudget;
