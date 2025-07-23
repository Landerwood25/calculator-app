export const calculate = (input: string) => {
  const numbers = input.split(/\D/g);
  const op = input.split(/\d/g).filter(Boolean);

  let result = parseInt(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    let outCome = performOperation([result, parseInt(numbers[i])], op[i - 1]);
    result = outCome ? outCome : parseInt(numbers[i - 1]);
  }

  return result.toString();
};

const performOperation = (numbers: number[], operand: string) => {
  switch (operand) {
    case "+":
      return numbers[0] + numbers[1];
    case "-":
      return numbers[0] - numbers[1];
    case "*":
      return numbers[0] * numbers[1];
    case "/":
      return numbers[0] / numbers[1];
  }
};
