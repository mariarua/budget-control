import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import SpentsList from "./components/SpentsList";
import { generarId } from "./helpers";
import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [spents, setSpents] = useState([]);

  const handleNewBudget = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  };

  const saveSpent = (spent) => {
    spent.id = generarId();
    spent.date = Date.now();
    setSpents([...spents, spent]);

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
    console.log(spent);
  };

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <SpentsList spents={spents} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewBudget}
              alt="Nuevo gasto"
              onClick={handleNewBudget}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveSpent={saveSpent}
        />
      )}
    </div>
  );
}

export default App;
