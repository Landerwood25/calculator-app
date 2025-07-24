import {
  useState,
  useMemo,
  type FC,
  type PropsWithChildren,
  type MouseEventHandler,
} from "react";
import { CalculatorContext, type CalculatorState } from "./CalculatorContext";
import { calculate } from "../utilities/math";
import { operandsArr, numbersArr } from "../utilities/constants";

const initialState: CalculatorState = {
  input: "",
  display: "",
  enterClicked: false,
};

export const CalculatorProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<CalculatorState>(initialState);

  const handleClearPress = () => {
    setState(initialState);
  };

  const handleEnterPress = () => {
    if (!state.input) {
      return;
    }
    const answer = calculate(state.input);
    setState({
      ...state,
      input: answer ? answer : "",
      display: answer ? answer : "",
    });
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const eventValue = (event.target as HTMLButtonElement).value;
    console.log("eventValue", eventValue);

    if (operandsArr.includes(eventValue)) {
      if (
        operandsArr.includes(state.input[state.input.length - 1]) ||
        state.input.length === 0
      ) {
        return;
      }
    } else if (numbersArr.includes(eventValue) && state.enterClicked) {
      setState((prevState) => {
        return {
          ...prevState,
          input: eventValue,
          display: eventValue,
        };
      });
      return;
    } else if (eventValue === "C") {
      handleClearPress();
      return;
    } else if (eventValue === "=") {
      setState({
        ...state,
        enterClicked: true,
      });
      handleEnterPress();
      return;
    }

    setState((prevState) => {
      return {
        ...prevState,
        input: prevState.input + eventValue,
        display: prevState.display + eventValue,
      };
    });
  };

  const contextValue = useMemo(
    () => ({
      ...state,
      handleClick,
    }),
    [state, handleClick]
  );

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};
