import Spent from "./Spent";

function SpentsList({ spents }) {
  return (
    <div className="listado-gastos contenedor">
      <h2>{spents.length ? "Gastos" : "No hay gastos"}</h2>
      {spents.map((spent) => (
        <Spent key={spent.id} spent={spent} />
      ))}
    </div>
  );
}

export default SpentsList;
