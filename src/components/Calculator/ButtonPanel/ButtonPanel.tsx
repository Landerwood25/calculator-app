import { type MouseEventHandler } from "react";
import Button from "./Button";
import {
  type ButtonClassesNames,
  type ButtonClassObjType,
  type ButtonLabelTypes,
  buttonClassMap,
} from "../../../utilities";

interface ButtonPanelProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonPanel({ handleClick }: ButtonPanelProps) {
  const createButton = (
    btnLabel: ButtonLabelTypes,
    btnClass: ButtonClassesNames,
    idx: number
  ) => {
    return (
      <Button
        className={`btn btn-${btnClass}`}
        label={btnLabel}
        handleClick={handleClick}
        key={`${btnLabel}-${idx}`}
      />
    );
  };

  return (
    <div className="button-panel">
      {buttonClassMap.map((btnClassObj: ButtonClassObjType, idx) => {
        return createButton(btnClassObj.label, btnClassObj.class, idx);
      })}
    </div>
  );
}
