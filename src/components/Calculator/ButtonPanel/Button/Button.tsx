import { type MouseEventHandler } from 'react'

interface ButtonProps {
  className: string;
  label: string;
  handleButtonPress: MouseEventHandler<HTMLButtonElement>;
}
export default function Button({className, label, handleButtonPress} : ButtonProps) {
  return (
    <button type="button" className={className} onClick={(event) => handleButtonPress(event)} value={label}>{label}</button>
  )
}
