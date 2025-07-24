import { useContext } from "react";
import Calculator from "./components/Calculator/Calculator";
import "./App.css";
import { CalculatorContext } from "./context/CalculatorContext";

function App() {
  const context = useContext(CalculatorContext);
  if (!context) return null;

  return (
    <Calculator display={context.display} handleClick={context.handleClick} />
  );
}

export default App;
