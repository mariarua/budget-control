import { useState } from "react";
import Message from "./Message";
import closeModal from "../img/cerrar.svg";

function Modal({ setModal, animateModal, setAnimateModal, saveSpent }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [mesagge, setMessage] = useState("");

  const hideModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, quantity, category].includes("")) {
      setMessage("Todos los campos son obligatorios ");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    saveSpent({ name, quantity, category });
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={closeModal} alt="Cerrar modal" onClick={hideModal} />
      </div>
      <form
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo gasto</legend>
        {mesagge && <Message tipo="error">{mesagge}</Message>}
        <div className="campo">
          <label htmlFor="nombre">Nombre gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="Ahorro">Ahorro</option>
            <option value="Comida">Comida</option>
            <option value="Gastos varios">Gastos varios</option>
            <option value="Hobbies">Hobbies</option>
            <option value="Salud">Salud</option>
            <option value="Suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="añadir gasto" />
      </form>
    </div>
  );
}

export default Modal;
