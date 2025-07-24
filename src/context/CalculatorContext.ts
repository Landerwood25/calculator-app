import { createContext, type MouseEventHandler } from 'react';

export interface CalculatorState {
    input: string,
    display: string,
    enterClicked: boolean,
}

export interface CalculatorActions {
    handleClick: MouseEventHandler<HTMLButtonElement>,
}

export interface CalculatorContextType extends CalculatorState, CalculatorActions { }

export const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);