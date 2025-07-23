import { useState, type MouseEventHandler } from "react";
import { calculate } from "./utilities/math";
import Calculator from "./components/Calculator/Calculator";
import { numbersArr, operandsArr } from "./utilities/constants";
import "./App.css";

interface Icalc {
  input: string;
  display: string;
  enterClicked: boolean;
}

function App() {
  const [calc, setCalc] = useState<Icalc>({
    input: "",
    display: "",
    enterClicked: false,
  });

  const handleClearPress = () => {
    setCalc({
      input: "",
      display: "",
      enterClicked: false,
    });
  };

  const handleEnterPress = () => {
    const answer = calculate(calc.input);
    setCalc({
      ...calc,
      input: answer ? answer : "",
      display: answer ? answer : "",
    });
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log("calc", calc);

    const eventValue = (event.target as HTMLButtonElement).value;

    if (operandsArr.includes(eventValue)) {
      if (
        operandsArr.includes(calc.input[calc.input.length - 1]) ||
        calc.input.length === 0
      ) {
        return;
      }
    } else if (numbersArr.includes(eventValue) && calc.enterClicked) {
      setCalc((prevCalc) => {
        return {
          ...prevCalc,
          input: eventValue,
          display: eventValue,
        };
      });
      return;
    } else if (eventValue === "C") {
      handleClearPress();
      return;
    } else if (eventValue === "=") {
      setCalc({
        ...calc,
        enterClicked: true,
      });
      handleEnterPress();
      return;
    }

    setCalc((prevCalc) => {
      return {
        ...prevCalc,
        input: prevCalc.input + eventValue,
        display: prevCalc.display + eventValue,
      };
    });
  };

  return <Calculator display={calc.display} handleClick={handleClick} />;
}

export default App;
