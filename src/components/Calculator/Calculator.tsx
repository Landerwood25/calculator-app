import Screen from "./Screen/Screen";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import type { MouseEventHandler } from "react";

interface CalculatorProps {
  display: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
export default function Calculator({ display, handleClick }: CalculatorProps) {
  return (
    <section className="calculator">
      <Screen display={display} />
      <ButtonPanel handleClick={handleClick} />
    </section>
  );
}
