import React from "react";

function Spent({ spent }) {
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{spent.category}</p>
          <p className="nombre-gasto">{spent.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Spent;
