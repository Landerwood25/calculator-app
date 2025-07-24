import { type MouseEventHandler } from "react";

interface ButtonProps {
  className: string;
  label: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
export default function Button({ className, label, handleClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={(event) => handleClick(event)}
      value={label}
    >
      {label}
    </button>
  );
}
