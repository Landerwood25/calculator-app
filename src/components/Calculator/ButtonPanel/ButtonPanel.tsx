import { type MouseEventHandler } from "react";
import Button from "./Button/Button";
import { buttonClassMap } from "../../../utilities/constants";
import type {
  ButtonClassesNames,
  ButtonClassObjType,
  ButtonLabelTypes,
} from "../../../utilities/types";

interface ButtonPanelProps {
  handleButtonPress: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonPanel({ handleButtonPress }: ButtonPanelProps) {
  const createButton = (
    btnLabel: ButtonLabelTypes,
    btnClass: ButtonClassesNames
  ) => {
    return (
      <Button
        className={`btn btn-${btnClass}`}
        label={btnLabel}
        handleButtonPress={handleButtonPress}
      />
    );
  };

  return (
    <div className="button-panel">
      {buttonClassMap.map((btnClass: ButtonClassObjType) => {
        return createButton(btnClass.label, btnClass.class);
      })}
    </div>
  );
}
