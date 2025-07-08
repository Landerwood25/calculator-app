import Screen from './Screen/Screen';
import ButtonPanel from './ButtonPanel/ButtonPanel';
import type { MouseEventHandler } from 'react';

interface CalculatorProps {
    display: string;
    handleButtonPress: MouseEventHandler<HTMLButtonElement>;
}
export default function Calculator({display, handleButtonPress}: CalculatorProps) {
    return (
        <section className="calculator">
            <Screen display={display} />
            <ButtonPanel handleButtonPress={handleButtonPress} />
        </section>
    )
}
