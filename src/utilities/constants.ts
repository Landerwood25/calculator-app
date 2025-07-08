import type { ButtonClassMapType, ButtonLabelTypes } from "./types";

export const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const operandsArr = ['+', '-', '*', '/'];
export const buttonLabels: ButtonLabelTypes[] = [
    'C', '?', '?', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '?', '0', '.', '='
];

export const buttonClassMap: ButtonClassMapType = [
    { label: 'C', class: "clear" },
    { label: '?', class: "grey" },
    { label: '/', class: "yellow" },
    { label: '7', class: "grey" },
    { label: '8', class: "grey" },
    { label: '9', class: "grey" },
    { label: '*', class: "yellow" },
    { label: '4', class: "grey" },
    { label: '5', class: "grey" },
    { label: '6', class: "grey" },
    { label: '-', class: "yellow" },
    { label: '1', class: "grey" },
    { label: '2', class: "grey" },
    { label: '3', class: "grey" },
    { label: '+', class: "yellow" },
    { label: '0', class: "grey" },
    { label: '.', class: "grey" },
    { label: '=', class: "equal" },
];