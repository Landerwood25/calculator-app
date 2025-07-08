import { useState, type MouseEventHandler } from 'react'
import './App.css'
import { calculate } from './utilities/math';
import Calculator from './components/Calculator/Calculator';
import { numbersArr } from './utilities/constants';


function App() {
  const [display, setDisplay] = useState<string>('');
  const [currNumber, setCurrNumber] = useState<string>('');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [nonNumbers, setNonNumbers] = useState<string[]>([]);

  const handleButtonPress: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log((event.target as HTMLButtonElement).value);
    const eventValue = (event.target as HTMLButtonElement).value;
    setDisplay(display + eventValue);
    if (numbersArr.includes(eventValue)) {
      handleNumberPress(parseInt(eventValue));
    } else {
      handleNonNumPress(eventValue);
    }

  }
  const handleNumberPress = (num: number) => {
    setCurrNumber(currNumber + num.toString());
  };
  const handleOperandPress = (op: string) => {
    setNumbers([...numbers, parseInt(currNumber)]);
    setCurrNumber('');
    setNonNumbers([...nonNumbers, op]);
  };
  const handleClearPress = () => {
    setDisplay('');
    setCurrNumber('');
    setNumbers([]);
    setNonNumbers([]);
  };
  const handleEnterPress = () => {
    numbers.push(parseInt(currNumber));
    const answer = calculate(numbers, nonNumbers);
    setDisplay(answer ? answer.toString() : '');
    setCurrNumber('');
    setNumbers([]);
    setNonNumbers([]);

  };
  const handleNonNumPress = (op: string) => {
    switch (op) {
      case "+":
        handleOperandPress("+");
        break;
      case "-":
        handleOperandPress("-");
        break;
      case "*":
        handleOperandPress("*");
        break;
      case "/":
        handleOperandPress("/");
        break;
      case ".":
        console.log(".");
        break;
      case "C":
        handleClearPress();
        break;
      case "=":
        handleEnterPress();
        break;
    }
  };



  return (
    <Calculator display={display} handleButtonPress={handleButtonPress} />
  )
}

export default App


// pemdas
// decimals
// clear
// negatives
// fractions
// context
// * works fine right now with simple math want to : 
// * start over after enter? change way I track numbers pressed and what not
// * decimals + fractions
// * negatives
// *
// *
// *