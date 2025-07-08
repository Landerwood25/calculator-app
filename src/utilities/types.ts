export type ButtonLabelTypes = 
'C' | '?' | '/' | '7' |
'8' | '9' | '*' | '4' | 
'5' | '6' | '-' | '1' |
'2' | '3' | '+' | '0' | '.' | '=';

export type ButtonClassesNames = "clear" | "grey" | "yellow" | "equal";
export type ButtonClassObjType = {label : ButtonLabelTypes, class : ButtonClassesNames}
export type ButtonClassMapType = ButtonClassObjType[];